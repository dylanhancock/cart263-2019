/******************************************************

SYSIPHUS IN hell

TWO MODES, EITHER RUNNING FROM THE BOULDER OR CHASING THE BOULDER

******************************************************/

// Track whether the game is over
var gameOver = false;
// Player position, size, velocity
var sisyphus;
var playerX;
var playerY;
var playerRadius = 25;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 5;
// Player health
var playerHealth;
var playerMaxHealth = 255;
// Player fill color
var playerFill = 50;

// Prey position, size, velocity
var preyX;
var preyY;
var preyRadius = 25;
var preyVX;
var preyVY;
var preyMaxSpeed = 4;
// Prey health
var preyHealth;
var preyMaxHealth = 100;
// Prey fill color
var preyFill = 200;

// Amount of health obtained per frame of "eating" the prey
var eatHealth = 10;
// Number of prey eaten during the game
var preyEaten = 0;
//added states for game modes
var state = "CHASING";
var song;


// setup()
//
// Sets up the basic elements of the game
function setup() {
  //make canvas window width and height
    createCanvas(windowWidth, windowHeight);

  noStroke();
//setup player and prey
  setupPrey();
  setupPlayer();
}

function preload () {
//adding the images and sounds
  sisyphus = loadImage("assets/images/skelly.png");
  bg = loadImage('assets/images/hellgame.png');
  boulder = loadImage('assets/images/hellboulder.png');
  colission = loadSound("assets/sounds/colission.mp3");
  nightmare = loadSound("assets/sounds/nightmare.mp3");
  death = loadSound("assets/sounds/death.mp3");

}
// setupPrey()
//
// Initialises prey's position, velocity, and health
function setupPrey() {
  preyX = width/5;
  preyY = height/2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

// draw()
//
function draw() {

  switch (state) {
//CHASING THE BOULDER
    case "CHASING":
  //CHASING FUNCTION
    chasing();
    break;
//RUNNING FROM THE BOULDER
    case "RUNNING":
//RUNNING FUNCTION
      running();
      break;

    }
}

function chasing(){
//background is hell
background(bg);
//controls (up down side and side)
    handleInput();
//how to move the boulder and sisyphus
    movePlayer();
    movePrey();
//check if sisyphus is dead
//update health for the chasing mode
    updateHealth();
//colission for the running mode
    sisyphusCollission();
//drawing the prey
    drawPrey();
    //drawing the player
    drawPlayer();
    //text for game information
    textSize(15);
    fill(255,244,0);
    fill(255,255,255);
    textSize(30);
text("MAKE SYSIPHUS RUN UNTIL HE DIES OF EXHAUSTION", 500, 120, 1000, 500);
text("EXHAUSTION LEVEL", 10, 100, 500, 1000);
fill(255,0,0);
text("DANGER", 10, 60, 500, 1000);
fill(0,255,0);
text("SAFE", 200, 60, 500, 1000);
fill(255,255,255);
rect (10,10,playerHealth,50);
}

function running(){
//function for the running game mode
//background is hell
background(bg);
//input via the arrow keys
  handleInput();
//how the player and prey move respectively
  movePlayer();
  movePrey();
//check if the colission has happened
  sisyphusCollission();
//modiefied draw function so the roles can switch
  drawPrey2();
  drawPlayer2();
//distance variable for the danger tracker
  var d = dist(playerX,playerY,preyX,preyY);
//informational game text
  fill(255,244,0);
  textSize(30);
  fill(255,255,255);
  text("RUN FROM THE BOULDER UNTIL YOU GET CRUSHED", 500, 120, 1000, 500);
  text("BOULDER DISTANCE", 10, 100, 500, 1000);
  fill(255,0,0);
  text("DANGER", 10, 60, 500, 1000);
  fill(0,255,0);
  text("SAFE", 150, 60, 500, 1000);
  fill(255,255,255);
  rect (10,10,d,50);

}
// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX += playerVX;
  playerY += playerVY;
//make sure the player doesnt go off screen
  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

// updateHealth()
//
// Reduce the player's health (every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health, constrain to reasonable range
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  // Check if the player is dead
  if (playerHealth === 0) {
    // If so, the game is over
    playerHealth = playerMaxHealth;
    gameOver = true;
    death.play();
    state = "RUNNING";
  }
}


//check is sisyphus collides with boulder

function sisyphusCollission() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    //play the death noise
    death.play();
colission.play();
//change state
    state = "CHASING";
  }
}
// movePrey()
//

function movePrey() {
//move prey to follow the player at an increased velocity over time
  if ((dist(preyX, preyY, playerX, playerY) > preyRadius + playerRadius)) {
//speed boost to lower the pace so it's playable
    var speedboost = 0.03;
    preyVX = 1;
    preyVY = 1;
    preyVX += (playerX - preyX) * speedboost;
    preyVY += (playerY - preyY) * speedboost;
}

  // Update prey position based on velocity
preyX += preyVX;
preyY += preyVY;

//more screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }

  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }
}


// drawPrey()
//
// Draw the prey as sisyphus with an opacity of the health of sisyphus
function drawPrey() {
  tint(255,playerHealth);
  image(sisyphus,preyX,preyY,preyRadius*2);
}

// drawPlayer()
//
// Draw the player as a boulder
function drawPlayer() {
  //no tint
  tint(255,255);
  image(boulder,playerX,playerY,playerRadius*2);
}

function drawPrey2() {
  //draw prey as sisyphus without having a health based tint
  image(sisyphus,playerX,playerY,playerRadius*2);
}

function drawPlayer2() {
  //draw the boulder based on health
  fill(255,playerHealth);
  image(boulder,preyX,preyY,preyRadius*2);
}

/******************************************************

Game - Chaser
Pippin Barr

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, random movement, screen wrap.

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

var state = "CHASING";
var song;


// setup()
//
// Sets up the basic elements of the game
function setup() {
    createCanvas(windowWidth, windowHeight);

  noStroke();

  setupPrey();
  setupPlayer();
}

function preload () {

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
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {
  //
  // background(100,100,200);
  //
  // if (!gameOver) {
  //   handleInput();
  //
  //   movePlayer();
  //   movePrey();
  //
  //   updateHealth();
  //   checkEating();
  //
  //   drawPrey();
  //   drawPlayer();
  //
  // }
  // else {
  //   runAway();
  // }

  switch (state) {
//LOADING SCREEN, JUST THE INSTRUCTIONS
    case "CHASING":
    //USING MY LOADING FUNCTION
    chasing();
    break;
//STREETZ REFERS TO THE STREETZ LEVEL
    case "RUNNING":
//THE STREETS FUNCTION OBVIOUSLY
      running();
      break;

    }
}

function chasing(){

background(bg);

    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
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


background(bg);

  handleInput();

  movePlayer();
  movePrey();

  checkEating();

  drawPrey2();
  drawPlayer2();

  var d = dist(playerX,playerY,preyX,preyY);

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

  // Wrap when player goes off the canvas
  //
  // playerX = constrain(playerX, 0,windowWidth);
  // playerY = constrain(playerY, 0,400);
  //
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



// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the player health
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    // Reduce the prey health
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);

    // Check if the prey died
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0,width);
      preyY = random(0,height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten++;
    }
  }
}

function checkEating() {
  // Get distance of player to prey
  var d = dist(playerX,playerY,preyX,preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    death.play();
colission.play();

    state = "CHASING";
  }
}
// movePrey()
//
// Moves the prey based on random velocity changes
function movePrey() {
  // Change the prey's velocity at random intervals
  // random() will be < 0.05 5% of the time, so the prey
  // will change direction on 5% of frames

  // will change direction on 5% of frames
// if (random() < 0.05) {
//   // Set velocity based on random values to get a new direction
//   // and speed of movement
//   // Use map() to convert from the 0-1 range of the random() function
//   // to the appropriate range of velocities for the prey
//   preyVX = map(random(),0,1,-preyMaxSpeed,preyMaxSpeed);
//   preyVY = map(random(),0,1,-preyMaxSpeed,preyMaxSpeed);
// }
  if ((dist(preyX, preyY, playerX, playerY) > preyRadius + playerRadius)) {
//little speed boost so the cops make it to you faster than the other cars
    var speedboost = 0.03;
    preyVX = 1;
    preyVY = 1;
    preyVX += (playerX - preyX) * speedboost;
    preyVY += (playerY - preyY) * speedboost;
}

  // Update prey position based on velocity
preyX += preyVX;
preyY += preyVY;


// preyY = constrain(preyY,0,1000);
// preyX = constrain(preyX, 0,1000);
  // Screen wrapping
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
// Draw the prey as an ellipse with alpha based on health
function drawPrey() {
  tint(255,playerHealth);
  image(sisyphus,preyX,preyY,preyRadius*2);
}

// drawPlayer()
//
// Draw the player as an ellipse with alpha based on health
function drawPlayer() {
  tint(255,255);
  image(boulder,playerX,playerY,playerRadius*2);
}

function drawPrey2() {
  image(sisyphus,playerX,playerY,playerRadius*2);
}

function drawPlayer2() {
  fill(255,playerHealth);
  image(boulder,preyX,preyY,preyRadius*2);
}

// showGameOver()
//
// Display text about the game being over!
function showGameOver() {
  textSize(32);
  textAlign(CENTER,CENTER);
  fill(0);
  var gameOverText = "GAME OVER\n";
  gameOverText += "You ate " + preyEaten + " prey\n";
  gameOverText += "before you died."
  text(gameOverText,width/2,height/2);
}

//BASED THIS PORTION OF CODE FROM A UNIQUE PEN I FOUND ON CODEPEN.IO
//FOCUSING ON FLY MOVEMENT THIS PORTION TAKES OUR HUMAN FLIES AND DISPLAYES THEM AT DIFFERENT SIZES AND MOVEMENTS
// DISPLAYES A RANDOM AMOUNT OF HUMANS AT DIFFERENT MOVEMENT STYLES WITH DIFFERENT SIZING ON EACH CLICK

//empty array to hold our flies
var bugs = [];
//set tile size
var tileSize = 20;
//set tile number
var tiles = 3450;
var img;

//loading of sounds
let snd = new Audio("assets/splat.mp3");
let fly = new Audio("assets/swarm.wav");
let swarm = new Audio("assets/wasp.wav");
let buzz = new Audio("assets/blowflies.wav");

function setup() {

  noStroke();
  colorMode(HSB, 360, 100, 50, .1);

  //canvas establishing
  createCanvas(window.innerWidth, window.innerHeight);
  //loop which takes x and y coordinates applies them to a random tile size and prints 3450 tiles worth on the setup
  for (var i = 0; i < tiles; i++) {
    var x = round((random(width / tileSize)) * tileSize);
    var y = round(random(height / tileSize) * tileSize);
    var r = tileSize;
    var h = random(0, 360);
    //our bug has an x y a tilesize and a height
    bugs[i] = new JitterBug(x, y, r, h);
  }
}

function preload() {
  //loading my gif
  img = loadImage('assets/walkingghostcopy.gif');
}

function draw() {

  background(200, 100, 0, .01);
  //apply move and display as tiles are printing
  for (var i = 0; i < tiles; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}
//setting our fly jitter bug up with properties
function JitterBug(tempX, tempY, tempDiameter, tempHue) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.h = tempHue;
  this.move = function() {
    //noise based movement
    var tx = round(random(-1, 1));
    var ty = round(random(-1, 1));


    this.x += (tx * tileSize);
    if ((this.x > width + (tileSize * 8)) || (this.x < -tileSize * 8)) {
      this.x = round(random(width / tileSize)) * tileSize;
    }
    this.y += (ty * tileSize);
    if ((this.y > height + (tileSize * 8)) || (this.y < -tileSize * 8)) {
      this.y = round(random(height / tileSize)) * tileSize;
    }
  }
  //display function
  this.display = function() {
    fill(tempHue, 100, 50, 1);
    image(img, this.x, this.y, this.diameter, this.diameter);
  }
}

function mousePressed() {
  //play sounds
  snd.play();
  swarm.play();
  fly.play();
  buzz.play();
  swarm.play();
  //select random tile size between 0 and 70
  tileSize = random(0, 70);
  //amount of tiles also random
  tiles = round(random(0, 1500));
  //making sure the tile size makes really small tiles if it is less than 2
  if (tileSize < 2) tiles = round(random(500, 2000));
  //loop through and print our jitterbug flies
  for (var i = 0; i < tiles; i++) {
    var x = round(random(width / tileSize)) * tileSize;
    var y = round(random(height / tileSize)) * tileSize;
    var r = tileSize;
    var h = random(0, 360);
    bugs[i] = new JitterBug(x, y, r, h);
  }

}

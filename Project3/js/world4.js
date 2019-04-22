

// An array to store the predato object we will instantiate
var predators;

// An empty array to store the flyhumans
var flyHumans = [];
var flyHumans2 = [];
var flyHumans3 = [];

// The number of flyhumans we'll add to the simulation per click
var numPreyPerClick = 100;
var numPreyPerClick2 = 100;
var numPreyPerClick3 = 20;
var ghost;
var playerRadius = 200;
// preload()
//
//load sounds

let snd = new Audio("assets/splat.mp3");
let fly = new Audio("assets/clippers.wav");
let buzz = new Audio("assets/wasp.wav");
let help1 = new Audio("assets/help3.wav");
let swarm = new Audio("assets/3990__noisecollector__granny-demonic.wav");

function preload() {

ghost =  loadImage('assets/ghostguy.gif');

}

// setup()
//
function setup() {
  createCanvas(windowWidth,windowHeight);
  // Instantiate the predator using the constructor
  predator = new Predator(width/2,height/2,25,5,color(255,0,0));

}

// draw()
function draw() {

  background(0);
//display and update flyhumans in a loop until the correct number of fly humans has been sent into the array
//flyhumans goes from left of the screen to the middle then loops along y axis
  for (var i = 0; i < flyHumans.length; i++) {

      flyHumans[i].update();
      flyHumans[i].display();




  }

///flyhumans 2 circles around the screen
  for (var i = 0; i < flyHumans2.length; i++) {

        flyHumans2[i].update1();
        flyHumans2[i].display1();




    }
///flyhumans 3 spawns and follows mouse movement
      for (var i = 0; i < flyHumans3.length; i++) {

            flyHumans3[i].update1();
            flyHumans3[i].display1();




        }
}

// mousePressed()
//
// We add a number of flyhumans to the simulation near the mouse click location
function mousePressed() {
  snd.play();
  fly.play();
  buzz.play();
  help1.play();
  help1.volume = 1;
  swarm.play();

  // Use a for loop to add numPreyPerClick's worth of flyhumans
  for (var i = 0; i < numPreyPerClick; i++) {
    // Choose a starting position randomly offset from the click location
    var x = 0 + random(-300,300);
    var y = 0 + random(-300,300);
    // Create the flyhuman object
    var newFlyhumans = new FlyHumans(x,y,5,0,color(0,0,255));
    // Add the flyhuman object to the flyhuman array
    flyHumans.push(newFlyhumans);
  }
  for (var i = 0; i < numPreyPerClick2; i++) {
    // Choose a starting position randomly offset from the click location
    var x = width - 200 + random(-500,500);
    var y = height -100 + random(-100,100);
    // Create the flyhuman object
    var newFlyhumans2 = new FlyHumans2(x,y,5,2,color(0,0,255));
    // Add the flyhuman object to the flyhuman array
    flyHumans.push(newFlyhumans2);


    flyHumans.push(newFlyhumans2);
  }
  for (var i = 0; i < numPreyPerClick3; i++) {
    // Choose a starting position randomly offset from the click location
    var x = width/2 + random(-500,500);
    var y = height/2 + random(-100,100);
    // Create the flyhuman object
    var newFlyhumans3 = new FlyHumans3(x,y,5,2,color(0,0,255));
    // Add the flyhuman object to the flyhuman array
    flyHumans.push(newFlyhumans3);


    flyHumans.push(newFlyhumans3);
  }



function drawPlayer() {
  //draws an invisible player so the flyhumans 3 function has a location to track
  fill(255,0,0);
  ellipse(mouseX,mouseY,playerRadius*2);
}
}

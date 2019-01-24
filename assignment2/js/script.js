"use strict";

/*****************

OOP Circle Eater
Pippin Barr

An Object-Oriented version of the Circle Eater program.
The player moves a circle around with the mouse.
Another circle represents food which the player eats by overlapping.
The player circle shrinks over time, but grows when it eats.

******************/

// Constants for key quantities
const AVATAR_MAX_SIZE = 64;
const AVATAR_SIZE_LOSS_PER_FRAME = 0.3;
const FOOD_MIN_SIZE = 5;
const FOOD_MAX_SIZE = 100;

// Variables to store the two key objects
let avatar;
let food;
let foods = [];

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, avatar, and food, disable the cursor

function setup() {
  createCanvas(windowWidth, windowHeight);
  avatar = new Avatar(mouseX, mouseY, AVATAR_MAX_SIZE, AVATAR_SIZE_LOSS_PER_FRAME)
  // noCursor();
  //setting up my array
  for (let i = 0; i < 10; i++) {

    foods.push (new Food(random(0, width), random(0, height), FOOD_MIN_SIZE, FOOD_MAX_SIZE));
  }
}


// draw()
//
// Clear the background
// Update the avatar and check for eating
// Display the avatar and food

function draw() {

  background(0);
// for loop to create the array of objects
  for (let i = 0; i < foods.length; i++) {

    foods[i].updateFood();
//updated the food functions to involve array
    if (avatar.collide(foods[i])) {
      avatar.eat(foods[i]);
    }

    foods[i].display();
  }


  avatar.update();


  avatar.display();
}
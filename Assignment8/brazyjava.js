//DOM load event
"use strict";

$(document).ready(setup);

let $fly = ("#fly");

let array = [];

let width = $(window).width();
let height = $(window).height();


let radius = 100;

function setup() {

  let spotlightSize = 'transparent 80px, rgba(0, 0, 0, 0.85) 100px)';

  $('.oldspotlight').on('click', mousePressed, fliesUpdate);


}


document.addEventListener('click', mousePressed);

function mousePressed(e) {
setInterval (fliesUpdate,5);
  let numPreyPerClick = 5;
  // Use a for loop to add numPreyPerClick's worth of prey
  for (let i = 0; i < numPreyPerClick; i++) {
    // Choose a starting position randomly offset from the click location
    let angle = random(0, 360);
    console.log(angle);

let cosx = Math.cos(angle)*radius*3;
let sinx = Math.sin(angle)*radius*3;


    let x = width/2 + cosx;
    let y = height/2 + sinx;
    // Create the prey object
    const img = new Image(50,33);


    img.style = `position:absolute; top:${y}px; left:${x}px;`
    img.setAttribute('data-x',x)
    img.setAttribute('data-y',y)
    img.src = '../assets/walkingghost.gif';
    img.className = "flies";

    document.body.appendChild(img);
    array.push(img);
    // Add the prey object to the prey array
  }
}

fliesUpdate();
function random (min,max) {
  return Math.random()*(max-min)+(min);


}

function fliesUpdate() {

for (var i = 0; i < array.length; i++) {
  let fly = array[i];
  let maxSpeed = 0.5;

  let vx = random(-maxSpeed, maxSpeed);
  let vy = random(-maxSpeed, maxSpeed);
  // With 5% probability, update the velocity to random values
  // to create unpredictable movement
  if (Math.random() < 0.05) {
    vx = random(-maxSpeed, maxSpeed);
    vy = random(-maxSpeed, maxSpeed);
  }
  fly.setAttribute('data-x', Number(fly.getAttribute('data-x')) + vx)
  fly.setAttribute('data-y', Number(fly.getAttribute('data-y')) + vy)

  fly.style = `position:absolute; top:${fly.getAttribute('data-y')}px; left:${fly.getAttribute('data-x')}px;`
}


  // // Wrap
  // if (x < 0) {
  //   x += window.width;
  // } else if (x > window.width) {
  //   x -= window.width;
  // }
  // if (y < 0) {
  //   y += window.height;
  // } else if (y > window.height) {
  //   y -= window.height;
  // }

}

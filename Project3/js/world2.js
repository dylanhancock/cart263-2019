//DOM load event
"use strict";

$(document).ready(setup);
//establishing fly variable for jquery grabbing
let $fly = ("#fly");
//empt array for our flies
let array = [];
//width and height
let width = $(window).width();
let height = $(window).height();
let spotlightsize;
//loading our audio tracks to be played on click
let snd = new Audio("assets/splat.mp3");
let fly = new Audio("assets/fly1.mp3");
let buzz = new Audio("assets/buzz.wav");
//radius of our circle for upcoming function
let radius = 100;

function setup() {



}

//listen for click
document.addEventListener('click', mousePressed);
function mousePressed(e) {
  //play 3 sounds for fly ambience
  snd.play();
  fly.play();
  buzz.play();
  //update the human flies movement every 5 seconds
  setInterval(fliesUpdate, 5);
  //spawn 20 human flies
  let numPreyPerClick = 20;
  // loop through spawning fly humans until we reach 20
  for (let i = 0; i < numPreyPerClick; i++) {
    // randomly select an angle
    let angle = random(0, 360);
    console.log(angle);
//apply randomly selected angle to sin and cos functions adding the radius *3 to send fly
//out of circle at a random angle
    let cosx = Math.cos(angle) * radius * 3;
    let sinx = Math.sin(angle) * radius * 3;
//add cosx and sinx to x and y variables offset from centre of the screen

    let x = width / 2 + cosx;
    let y = height / 2 + sinx;
    // Create the fly human object
    const img = new Image(50, 33);

//set our  new variables into a string
    img.style = `position:absolute; top:${y}px; left:${x}px;`
    //confirm that we are swapping data x and data y with our x and y variable
    img.setAttribute('data-x', x)
    img.setAttribute('data-y', y)
    //source image
    img.src = '../assets/walkingghost.gif';
    //class name to apply z-index
    img.className = "flies";
//append to page

    document.body.appendChild(img);
    array.push(img);

    $('.oldspotlight').fadeOut(100, function() {
      $('.oldspotlight').fadeIn(100)
    });

    $('.oldspotlight').click(function() {
      var audio = {};
      audio["walk"] = new Audio();
      audio["walk"].src = "assets/splat.mp3"
      audio["walk"].addEventListener('load', function() {
        audio["walk"].play();
      });
    });
    $('.flies').attr("animation", "fade 1s linear");
    // Add the prey object to the prey array
  }
}

fliesUpdate();
//classic random function
function random(min, max) {
  return Math.random() * (max - min) + (min);


}

function fliesUpdate() {
//loop to push our flies into moving through noise based movement
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
    //pin the new x and y to data x and data y so we can place in a string
    fly.setAttribute('data-x', Number(fly.getAttribute('data-x')) + vx)
    fly.setAttribute('data-y', Number(fly.getAttribute('data-y')) + vy)
//the string
    fly.style = `position:absolute; top:${fly.getAttribute('data-y')}px; left:${fly.getAttribute('data-x')}px;`
  }
//fade in for style :)
  function spotlight() {
    $('.oldspotlight').fadeIn(5000);
  }




}

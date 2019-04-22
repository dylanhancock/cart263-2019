//DOM load event
//THIS SCRIPT SPAWNS AN ARRAY OF 300 HUMAN FLIES OPERATING UNDER NOISE BASED MOVEMENT
//CONSTRAINED TO A RECTANGLE TO FILL THE IMAGE OF THE FLY
$(document).ready(setup);
//full screen
let width = $(window).width();
let height = $(window).height();

//empty array which will contain the tiny humans acting as flies
let array = [];
//variables for constraining the flys position
let xmin = width / 2 - 200;
let xmax = width / 2 + 200;
let ymax = height / 2 + 400;
let ymin = height / 2 - 400;

function setup() {
//nothing to setup :)
}
// random function jquery requires
function random(min, max) {
  return Math.random() * (max - min) + (min);


}

//on click function VERY IMPORTANT
document.addEventListener('click', mousePressed);

function mousePressed(e) {
  //update the flies every second
  setInterval(fliesUpdate, 1);
  let numPreyPerClick = 300;
  // Use a for loop to add numPreyPerClick's worth of prey
  for (let i = 0; i < numPreyPerClick; i++) {
    // Choose a starting position randomly offset from the click location
    let angle = random(0, 360);
    console.log(angle);
    //spawn people in the centre of the screen
    let x = width / 2;
    let y = height / 2;
    // Create new person object
    const img = new Image(50, 33);

    //string which hold our positioning elements
    img.style = `position:absolute; top:${y}px; left:${x}px; z-index:-4000;`

    //setting 'data-x' and 'data y' to hold our x and y variables
    img.setAttribute('data-x', x)
    img.setAttribute('data-y', y)
    //src of the gif of the person
    img.src = '../assets/walkingghost.gif';
    //class name which allows me to set z-index
    img.className = "flies";

    //append our people to the page and push them into the array
    document.body.appendChild(img);
    array.push(img);
    // Add the prey object to the prey array
  }
}

fliesUpdate();

//flies update function
//gives noise based movement constrained to a box behind the fly overlay which allows the flies to fill image faster
function fliesUpdate() {
  //for loop which prompts the flies to move in noise based fashion
  for (var i = 0; i < array.length; i++) {
    let fly = array[i];
    let maxSpeed = 5;

    let vx = random(-maxSpeed, maxSpeed);
    let vy = random(-maxSpeed, maxSpeed);
    // With 5% probability, update the velocity to random values
    // to create unpredictable movement
    if (Math.random() < 0.05) {
      vx = random(-maxSpeed, maxSpeed);
      vy = random(-maxSpeed, maxSpeed);
    }
    //slecting the data x and data y attribute so we can apply constrain function
    let x = Number(fly.getAttribute('data-x'));
    let y = Number(fly.getAttribute('data-y'));
    //classic velocity based movement function
    x += vx;
    y += vy;
    //constrain function
    x = constrain(x, xmin, xmax);
    y = constrain(y, ymin, ymax);
    //re-set the attributes
    fly.setAttribute('data-x', x);
    fly.setAttribute('data-y', y);
    //apply to the string :)
    fly.style = `position:absolute; top:${y}px; left:${x}px;`
  }
  //constrain function which holds elements at the edges
  function constrain(value, min, max) {
    if (value < min) {
      value = min;
    }

    if (value > max) {
      value = max;
    }

    return value;
  }



}

"use strict";

/*****************

Eat Up
Pippin Barr

Using jQuery UI's draggable and droppable methods to
feed a hungry mouth!

Sounds:
Buzzing: https://freesound.org/people/soundmary/sounds/194931/
Chewing: https://freesound.org/people/InspectorJ/sounds/412068/

******************/

// Sound effects for the experience


// Variable to hold our two key elements
let $visible;
let $thumbsup;
let $video;
let $thumbsdown;
let $heaven;
let $apple;
let $currentImage;

let images = [$apple, $heaven];

$(document).ready(setup);

// let videos = document.getElementsByTagName('video')
// console.log(videos);
// videos.forEach(video => {
//   console.log(video);
//   if ( video.readyState === 4 ) console.log('ready')
// })


function setup() {


  console.log('SETUP');
  // document.getElementById('thumbsup').addEventListener('click', thumbsupClicked);
  // Save the selection of all spans (since we do stuff to them multiple times)
  $thumbsup = $('#thumbsup');
  $thumbsdown = $('#thumbsdown');
  $heaven = $('#heaven');
  // Set a click handler on the spans (so we know when they're clicked)

  $thumbsup.on('click',thumbsupClicked);
  $thumbsdown.on('click',thumbsdownClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  //NEW////////////////
  //adding secret as an accessable element
  $visible = $('#visible');
///telling the program to use my secret mouseover function on mouseover
  $video = $('video');


  $video.prop("muted",true);
  $('video:last').prop("muted",false);

}




// function divClicked (event,ui) {
//
// $(this).removeClass('visible');
//
//
// }

// document.addEventListener('click', thumbsupClicked)


// chew()
//
// Swaps the mouth image between closed and open and plays the crunching SFX
function thumbsupClicked () {
  console.log('clicked');
  // We can use .attr() to check the value of an attribute to
  // In this case we check if the image is the open mouth
  // if ($('video.attr('class')') === 'visible') {
  //   // If it is, we set the 'src' attribute to the closed mouth
  //   $video.attr('class','hidden');
  //   // and play the crunching
  // }
  // else if ($video.attr('class') === 'visible') {
  //     // If it is, we set the 'src' attribute to the closed mouth
  //     $video.attr('class','hidden');
  // }

  // $('.visible').addClass('hidden');
  $('video:last').animate({
    opacity: 0
  },5000,'swing',function () {
    $(this).remove();
    $('video:last').prop("muted",false);

  });

}

function thumbsdownClicked(){

let $currentImage = images[Math.floor(Math.random()*images.length)];

for (var i = 0; i < arrayLength; i++) {

       $currentImage.css("opacity", 1);

$heaven.css("opacity", 1);

}

"use strict";

/*****************
BRAIN DETERGENT BY DYLAN HANCOCK

******************/

// Variables
let $visible;
let $thumbsup;
let $video;
let $thumbsdown;
let $heaven;
let $apple;
let $eyes;
let $demons;
let $mackeeper;
let $currentImage;
let images = ['#mackeeper', '#clorox', '#eyes', '#demons', '#uzi'];
let $fuck;
let $like;
let $clorox;
let $uzi;
let $play;

$(document).ready(setup);


function setup() {
  //play onclick starts the videos
  $('#play').on('click', function() {
    $('video').each(function() {
      $(this).get(0).play();
    });
  });

  console.log('SETUP');
  //defining the elements
  $thumbsup = $('#thumbsup');
  $thumbsdown = $('#thumbsdown');
  $visible = $('#visible');
  $video = $('video');
  $play = $('#play');
  $fuck = $('#fuck');
  $like = $('#like');
  $clorox = $('#clorox');
  $uzi = $('#uzi');
  //click handler on thumbs up and down

  $thumbsup.on('click', thumbsupClicked);
  $thumbsdown.on('click', thumbsdownClicked);
  //click handler on the play button
  $('#play').click(function() {
    $play.remove();
  });
  //make mackeeper  and clorox draggable
  $("#mackeeper").draggable();
  $("#clorox").draggable();
  //mackeeper click function
  $('#mackeeper').click(function() {
    window.open('https://mackeeper.com/landings/87.2/?affid=4e146300-4442-11e9-a3d0-2f7c34604700-mzb&epayId=29&gclid=Cj0KCQjwjpjkBRDRARIsAKv-0O3gsQdrXInkxBMgTUgIRVhJvW3CgD0e003rjMOCEtDjqYSPNGwvjnIaAk0CEALw_wcB&landId=3007&reqid=Self=1-5c86cf1e-1eb364541e0901e25c75ad26;Root=1-5c86cf1e-190635dbfb2f7845bd2a5674&tid_ext=mackeeper;e;323267477431;4126966415&trt=29_451211356&userDefiner=mzb_4058&utm_campaign=uk_mackeeper_splt_loc81_lp872_7mar&utm_content=&utm_medium=&utm_source=&utm_term=', 'window name', 'window settings');
    return false;
  });

  //mute all videos except the one ontop (the last video)
  $video.prop("muted", true);
  $('video:last').prop("muted", false);
  //current image id at random
  let currentImageId = images[Math.floor(Math.random() * images.length)];
  //mouseover and mouseout functions
  $like.on('mouseover', wordSwap);
  $like.on('mouseout', text);
  $clorox.on('mouseover', bleachSwap);
  $clorox.on('mouseout', bleachReverse);
  $uzi.on('mouseover', uziSwap);
  $uzi.on('mouseout', uziReverse);

  if (annyang) {
    //if user says like or dislike, trigger functions
    let commands = {
      'like': thumbsupClicked,
      'dislike': thumbsdownClicked
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
  }
}




//Thumbs up on click or speech command reveals the hidden videos
function thumbsupClicked() {
  console.log('clicked');
  //goes to the last video and drops the opacity to zero then removes it.
  $('video:last').animate({
    opacity: 0
  }, 5000, 'swing', function() {
    $(this).remove();
    //unmute the new video which shows
    $('video:last').prop("muted", false);
  });
  //array which selects a popup to close
  let currentImageId = images[Math.floor(Math.random() * images.length)];
  //make opacity zero to make popup dissapear
  if ($(currentImageId).hasClass("visible2")) {
    $(currentImageId).css("opacity", 0);
  }

}
//Thumbs down on click or speech command produces a popup
function thumbsdownClicked() {
  //picks random image from my array to be a popup
  let currentImageId = images[Math.floor(Math.random() * images.length)];

  //pushes that image onto the screen
  $(currentImageId).append('body');
  $(currentImageId).css("opacity", 1);
  $(currentImageId).addClass("visible2");

}

//Jquery swaps the words on the opening screen for a cool effect
function wordSwap() {
  console.log("hello");
  $(like).text("hate");
}

function wordSwap2() {
  console.log("hello");
  $(fuck).text("hey");
}

function text() {
  console.log("hello");
  $(like).text("like");
}

//swapping of the bleach image on hover
function bleachSwap() {
  console.log("hello");
  $(clorox).attr("src", "assets/images/bleachcup.png");
}
//changes the bleach image back to bleach when the hover is gone
function bleachReverse() {
  console.log("hello");
  $(clorox).attr("src", "assets/images/clorox2.png");
}
//similar to bleach swap uzi swap changes the gif of the uzi to a pic of a burning laptop
function uziSwap() {
  console.log("hello");
  $(uzi).attr("src", "assets/images/explosionlaptop.gif");
}
//this function reverses it back
function uziReverse() {
  console.log("hello");
  $(uzi).attr("src", "assets/images/uzirotate.gif");
}

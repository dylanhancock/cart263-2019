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
let $eyes;
let $demons;
let $mackeeper;
let $currentImage;
let images = ['#mackeeper', '#clorox', '#eyes', '#demons'];
let $fuck;
let $like;
let $clorox;

$(document).ready(setup);

// let videos = document.getElementsByTagName('video')
// console.log(videos);
// videos.forEach(video => {
//   console.log(video);
//   if ( video.readyState === 4 ) console.log('ready')
// })


function setup() {

  $(document).on('click',function () {
    $('video').each(function () {
      $(this).get(0).play();
    });
  });

  console.log('SETUP');
  // document.getElementById('thumbsup').addEventListener('click', thumbsupClicked);
  // Save the selection of all spans (since we do stuff to them multiple times)
  $thumbsup = $('#thumbsup');
  $thumbsdown = $('#thumbsdown');
  // Set a click handler on the spans (so we know when they're clicked)

  $thumbsup.on('click',thumbsupClicked);
  $thumbsdown.on('click',thumbsdownClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  //NEW////////////////
  //adding secret as an accessable element
  $visible = $('#visible');
///telling the program to use my secret mouseover function on mouseover
  $video = $('video');

  $( "#mackeeper" ).draggable();

    $( "#clorox" ).draggable();
  $('#mackeeper').click(function(){
  window.open('https://mackeeper.com/landings/87.2/?affid=4e146300-4442-11e9-a3d0-2f7c34604700-mzb&epayId=29&gclid=Cj0KCQjwjpjkBRDRARIsAKv-0O3gsQdrXInkxBMgTUgIRVhJvW3CgD0e003rjMOCEtDjqYSPNGwvjnIaAk0CEALw_wcB&landId=3007&reqid=Self=1-5c86cf1e-1eb364541e0901e25c75ad26;Root=1-5c86cf1e-190635dbfb2f7845bd2a5674&tid_ext=mackeeper;e;323267477431;4126966415&trt=29_451211356&userDefiner=mzb_4058&utm_campaign=uk_mackeeper_splt_loc81_lp872_7mar&utm_content=&utm_medium=&utm_source=&utm_term=', 'window name', 'window settings');
  return false;
});


  $video.prop("muted",true);
  $('video:last').prop("muted",false);

let currentImageId = images[Math.floor(Math.random()*images.length)];
$fuck = $('#fuck');
$like = $('#like');
$clorox = $('#clorox');
$like.on('mouseover',wordSwap);
$like.on('mouseout',text);
$fuck.on('mouseover', wordSwap2);
$fuck.on('mouseout', text2);
$clorox.on('mouseover',bleachSwap);
$clorox.on('mouseout',bleachReverse);

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

let currentImageId = images[Math.floor(Math.random()*images.length)];
if ($(currentImageId).hasClass("visible2")) {
  $(currentImageId).css("opacity",0);
}

}

function thumbsdownClicked(){

let currentImageId = images[Math.floor(Math.random()*images.length)];

       //
       $(currentImageId).css("opacity", 1);
       $(currentImageId).addClass( "visible2" );

}



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

function text2() {
console.log("hello");
$(fuck).text("fuck");
}

function bleachSwap() {
console.log("hello");
$(clorox).attr("src","assets/images/bleachcup.png");
}

function bleachReverse() {
console.log("hello");
$(clorox).attr("src","assets/images/clorox2.png");
}

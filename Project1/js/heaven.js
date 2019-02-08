
//Variable for the amount of nights slept
let nightsSlept = 0;
//variable for the rooster sound which appears on each day slept
let snd = new Audio("assets/sounds/rooster.mp3");
//prepare the document to execute functions
$(document).ready(function() {
  //on click swap classes with a transparency to evoke the effect of day and night
  $("#cf_onclick").click(function() {
  $("#cf2 img.top").toggleClass("transparent");
  //play the sound
snd.play();
if ($("#cf2 img.top").hasClass("transparent")){
  //play the sound
snd.play();
  nightsSlept += 1;

}
//add the number of nights slept to the #nights slept id in the html
  $('#nightsSlept').text(nightsSlept);
});
});

/*

Condiments
Pippin Barr

Chooses random words from local JSON data to fill out a sentence
describing a condiment based on cats and rooms... weird.

Uses:

Corpora
https://github.com/dariusk/corpora

RiTA
http://rednoise.org/rita/index.html

*/

let vowels = "aeiouAEIOU";
let json;

$(document).ready(function() {

  // The first thing we need to do is load the data we're going
  // to use to get random words.
  //
  // For that we use jQuery's .getJSON() function, which we give
  // the location of the file, and a function to call when the data
  // is available...

  $(document).on('click', textMagic);
  $.getJSON('data/data.json', gotData);
});

// gotData (data)
//
// This function gets called by getJSON when the data has been loaded.
// The data itself will be in the 'data' argument as a JavaScript object.
function gotData(data) {
  // Now we select random elements from the three arrays inside
  // our JSON to get a random condiment, cat, and room. Then we add those
  // words onto our page by setting the text of the appropriate span.
  json = data;
  textMagic();
}

  function textMagic () {

  let data = json;
  // First the condiment
  // Get a random condiment from the condiments array in the JSON
  let condiment = getRandomElement(data.condiments);
  // Assume it's singular
  let verb = 'is';

  // Check if the last latter of the condiment is an 's'
  if (condiment.charAt(condiment.length - 1) === 's') {
    // If so, assume it's plural (this is a flawed assumption)
    verb = 'are';

  }

  let cat = getRandomElement(data.cats);

  let word = 'a';

  let secondword = 'a';

  let room = getRandomElement(data.rooms);

  for (let i = 0; i < vowels.length; i++) {
    if (cat.charAt(0) === vowels.charAt(i)) {
      word = 'an';
    }

    if (room.charAt(0) === vowels.charAt(i)) {
      secondword = 'an';
    }
  }

  // Now the cat

  // Same again for room
  let plants = getRandomElement(data.flowers);

  // Now we can construct our description with a template string
  // We have the basic structure of a sentence and we substitute in the
  // values we've just calculated
  let description = `${condiment} ${verb} like ${word} ${cat} in ${secondword} ${room} with ${plants}.`;

  // Finally, we add it to the page and hey presto!
  $('body').text(description);
}

// getRandomElement ()
//
// Returns a random element from the array provided
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

$(document).ready(function() {

  var kick = new Audio("assets/kick.wav");
  var rim = new Audio("assets/rim.wav");
  var snare = new Audio("assets/snare.wav");
  var scratch = new Audio("assets/scratch.wav");

  $(this).keypress(function(e) {
    if ( event.which == 49 ) {
      $(kick).trigger('play');
    }
    if ( event.which == 50) {
      $(rim).trigger('play');
    }
    if ( event.which == 51) {
      $(snare).trigger('play');
    }
    if ( event.which == 52) {
      $(scratch).trigger('play');
    }
  });



});

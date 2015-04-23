$(document).ready(function() {

  var kick = new Instrument("assets/kick.wav");
  var rim = new Instrument("assets/rim.wav");
  var snare = new Instrument("assets/snare.wav");
  var scratch = new Instrument("assets/scratch.wav");

  $(this).keypress(function(e) {

    if ( e.which === 49 ) {
      kick.play();
    }
    if ( e.which === 50) {
      rim.play();
    }
    if ( e.which === 51) {
      snare.play();
    }
    if ( e.which === 52) {
      scratch.play();
    }
  });

});

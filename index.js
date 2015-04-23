$(document).ready(function() {

  function Instrument(file) {
    this.sound = new Audio(file)
  }

  Instrument.prototype.play = function(){
    this.sound.currentTime = 0;
    this.sound.play();
  }

});

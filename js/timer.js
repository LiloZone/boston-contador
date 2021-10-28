$('html')

$(function() {

  var timer = setInterval( showSection, 5000);

  var counter = 0;

  function showSection() {
    if (counter ==0) { counter++; return; }

    $('#section1, #section2')
      .stop()
      .hide()
      .filter( function() { return this.id.match('section' + counter); })   
      .show('fast');
    counter == 2? counter = 0 : counter++; 

  }

});
$('html')

$(function() {

  var timer = setInterval( showSection, 7000);

  var counter = 0;

  function showSection() {
    if (counter ==0) { counter++; return; }

    $('#section1, #section2, #section3, #section4')
      .stop()
      .hide()
      .filter( function() { return this.id.match('section' + counter); })   
      .show('fast');
    counter == 4? counter = 0 : counter++; 

  }

});
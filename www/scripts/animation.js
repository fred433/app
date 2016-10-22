$(document).ready(function() {

  var elements = document.getElementsByClassName('anima');
  for(var i=0; i<elements.length; i++){ 
    $(elements[i]).animate({
      marginTop: 15
    }, 0);
    $(elements[i]).animate({
      marginTop: 0,
      opacity: 1
    }, 1500);
  }

});
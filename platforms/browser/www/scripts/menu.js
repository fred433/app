$(document).ready(function() {
  var $toggleButton = $('.toggle-button');
  var press = false;
  var elements = document.getElementsByClassName('animam');

  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
    var screen = $( window ).width();
    if(press == false){
      if(screen <= 425){
        jQuery(".toggle-button").css('right','50%');
        jQuery('nav').css('opacity', 1);  
        jQuery("#contentLayer").animate({
          marginLeft : "-50%"
        },700);
      }
      else{
        jQuery(".toggle-button").css('right','30%');
        jQuery('nav').css('opacity', 1);  
        jQuery("#contentLayer").animate({
          marginLeft : "-30%"
        },700);
      }
      for(var i=0; i<elements.length; i++){ 
        $(elements[i]).animate({
          opacity: 0
        }, 0);
        $(elements[i]).animate({
          opacity: 1
        }, 2000);
      }
      press = true;
    }
    else{
    	jQuery(".toggle-button").css('right','11%');
      jQuery("#contentLayer").animate({
        marginLeft : "0%"
      },700);
      jQuery('nav').css('opacity', 0);
      press = false;
    }
    
  });

});

$(function() {
  var homeurl = location.pathname;
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
  
  $("nav ul a").each(function(){
    if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
      $(this).addClass("active");
  })
  if(homeurl == "/" )
    $("li:first-child").children().addClass("active");
});
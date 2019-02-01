$(document).ready(function() {
  $('#mobile-click').click(function() {
    $('#overlay').fadeIn(250);  
    $('#mobile').fadeIn(250); 
  });

  $('#desktop-click').click(function() {
    $('#overlay').fadeIn(250);  
    $('#desktop').fadeIn(250); 
  });

  $('#tv-click').click(function() {
    $('#overlay').fadeIn(250);  
    $('#tv').fadeIn(250); 
  });

  $('.close').click(function() {
    $('#overlay').fadeOut(250);
    $('.pop-up').fadeOut(250);  
  });

  $('#overlay').click(function() {
    $('#overlay').fadeOut(250);
    $('.pop-up').fadeOut(250);  
  });
});

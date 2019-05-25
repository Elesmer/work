$(document).ready(function() {

  // Product page

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.new-header').addClass("sticky");
    } else {
      $('.new-header').removeClass("sticky");
    }
  });

  // Wow init

  new WOW().init();

});

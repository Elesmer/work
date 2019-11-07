$(document).ready(function () {


});

/* To top button */

var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.js-back-to-top');

//hide or show the "back to top" link
$(window).scroll(function(){
    ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('back-to-top-is-visible') : $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
    if( $(this).scrollTop() > offset_opacity ) {
        $back_to_top.addClass('back-to-top-fade-out');
    }
});

$('.cards__list').each(function(){
  $('.card .bet-number__h2', this).each(function(i){
    $(this).text('# ' + (i+1))

    if (i >= 99) {
  $(this).css('font-size', '3rem')
  }
  if (i >= 999) {
    $(this).css('font-size', '2rem')
  }
  })
})

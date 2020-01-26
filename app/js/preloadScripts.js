/* Preloader */

let firstPixelAnime = anime({
  targets: '.preloader .d',
  keyframes: [
    {translateY: 8.36},
    {translateX: 8.33},
    {translateY: 0},
    {translateX: 0}
  ],
  duration: 10000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

let secondPixelAnime = anime({
  targets: '.preloader .c',
  keyframes: [
    {translateX: -8.36},
    {translateY: 8.33},
    {translateX: 0},
    {translateY: 0}
  ],
  duration: 10000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

let thirdPixelAnime = anime({
  targets: '.preloader .b',
  keyframes: [
    {translateY: -8.33},
    {translateX: -8.33},
    {translateY: 0},
    {translateX: 0}
  ],
  duration: 10000,
  easing: 'easeOutElastic(1, .8)',
  loop: true
});

// let preloadCheck = document.getElementById('js-preloader');
let preloader = document.getElementById('js-loader');

document.body.onload = function() {

  setTimeout(function() {

    let firstPixel = document.getElementById('firstPixel');
    let secondPixel = document.getElementById('secondPixel');
    let thirdPixel = document.getElementById('thirdPixel');

    anime.remove(['.preloader .d','.preloader .c','.preloader .b']);

    anime({
      targets: '.preloader #firstPixel',
      translateX: -60,
      translateY: -250,
      // rotate: function() { return anime.random(-100, 200); },
      duration:  1000,
      direction: 'normal',
      scale: 0.5,
      delay: 200,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });

    anime({
      targets: '.preloader #secondPixel',
      translateX: -60,
      translateY: -250,
      // rotate: function() { return anime.random(-100, 200); },
      duration:  1000,
      direction: 'normal',
      scale: 0.5,
      delay: 300,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });

    anime({
      targets: '.preloader #thirdPixel',
      translateX: -60,
      translateY: -250,
      // rotate: function() { return anime.random(-100, 200); },
      duration:  1000,
      direction: 'normal',
      scale: 0.5,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    });

  }, 2000);

}
// End preloader

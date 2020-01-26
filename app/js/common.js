// Brand logo animation
// anime({
//   targets: [
//     '#logo_pixel_three'
//   ],
//   delay: 50,
//   translateX: -1.5,
//   fill: ['#fff', '#121212'],
//   direction: 'alternate',
//   duration: 300,
//   loop: 1,
//   opacity: 1
// });
// anime({
//   targets: [
//     '#logo_pixel_two'
//   ],
//   delay: 1000,
//   fill: ['#fff', '#ff4d4d'],
//   direction: 'alternate',
//   duration: 100,
//   loop: 1,
//   opacity: 1
// });
// anime({
//   targets: [
//     '#logo_pixel_one'
//   ],
//   delay: 1000,
//   fill: ['#fff', '121212'],
//   direction: 'alternate',
//   translateX: 1,
//   duration: 100,
//   loop: 1,
//   opacity: 1
// });

// Second block shapes animation

let options = {
  shapeColors: ['#ff4d4d','#333', '#ccc'],
  shapeTypes: ['rect','polygon', 'circle'],
  totalShapes: 1
}

let text = document.getElementById('text')

const word = new Word(text, options);

// Second block shapes animation end

// Header navigation element detection
let headerNav = document.querySelector(".header__nav")
// Header logo element detection
let headerLogo = document.querySelector(".header__logo")

$(document).ready(function() {

  // Full screen scroll init

  $.scrollify({
    section: ".section",
    overflowScroll: true,
    setHeights: false,
    before: function(index, section) {
      if (index == 0) {

        // Header logo pixels animation

        anime({
          targets: [
            '#logo_pixel_one',
            '#logo_pixel_two',
            '#logo_pixel_three'
          ],
          fill: ['rgba(0,0,0,0)', '#fff'],
          easing: 'easeInOutQuad',
          duration: 100
        });

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: 0,
          easing: 'easeInOutQuad',
          duration: 100
        });

        // Remove active class for nav element
        headerNav.classList.remove('active');

        // Animation for verity section
        word.hide({
          lettersAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: 0,
          },
          shapesAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: {
              value: 0,
              duration: 200,
              easing: 'linear'
            }
          }
        });
      } else if (index == 1) {

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '1',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 700
        });

        anime({
          targets: [
            '#logo_three_t',
            '#logo_three_h',
            '#logo_three_r',
            '#logo_three_e',
            '#logo_three_e_2',
            '#logo_pixels_p',
            '#logo_pixels_i',
            '#logo_pixels_x',
            '#logo_pixels_e',
            '#logo_pixels_l',
            '#logo_pixels_s'
          ],
          easing: 'easeInOutQuad',
          duration: 400,
          delay: 300,
          opacity: 1
        });

        anime({
          targets: [
            '#logo_pixel_one',
            '#logo_pixel_two',
            '#logo_pixel_three'
          ],
          fill: ['rgba(0,0,0,0)', '#fff'],
          easing: 'easeInOutQuad',
          delay: 200,
          duration: 400
        });

        // Back button animation
        anime({
          targets: '.skip-back__container--back',
          translateY: '-100',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Skip button animation
        anime({
          targets: '.skip-back__container--skip',
          translateY: '30',
          translateX: '-50%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Verity section central line shadow add
        anime({
          targets: '.background__line--central',
          boxShadow: '0px 0px 15px 10px rgba(0,0,0,0.75)',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 700,
          delay: 1000
        });
        // Remove active class for nav element
        headerNav.classList.remove('active');

        // Animation for verity section
        word.show({
          lettersAnimationOpts: {
            duration: 500,
            delay: (t,i) => i*60,
            easing: 'easeOutExpo',
            opacity: {
              value: [0,1],
              duration: 50,
              delay: (t,i) => i*60,
              easing: 'linear'
            },
            translateY: (t,i) => i%2 ? [anime.random(-350,-300),0] : [anime.random(300,350),0]
          },
          shapesAnimationOpts: {
            duration: 2000,
            easing: 'easeOutElastic',
            translateY: t => {
              const ty = anime.random(-200, 100);
              t.dataset.ty = ty;
              return [anime.random(-25,25),ty];
            },
            scale: t => {
              const s = randomBetween(1.5,2);
              t.dataset.s = s;
              return [s,s];
            },
            rotate: () => anime.random(-45,45),
            opacity: {
              value: [0,0.9],
              duration: 600,
              delay: 300,
              easing: 'linear'
            }
          }
        });
      } else if (index == 2) {

        // Header logo animation
        anime({
          targets: '.header__logo',
          opacity: '1',
          scale: 1.03,
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 300
        });

        anime({
          targets: [
            '#logo_three_t',
            '#logo_three_h',
            '#logo_three_r',
            '#logo_three_e',
            '#logo_three_e_2',
            '#logo_pixels_p',
            '#logo_pixels_i',
            '#logo_pixels_x',
            '#logo_pixels_e',
            '#logo_pixels_l',
            '#logo_pixels_s'
          ],
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 300,
          opacity: 0
        });

        anime({
          targets: [
            '#logo_pixel_one',
            '#logo_pixel_two',
            '#logo_pixel_three'
          ],
          fill: ['#fff', '#121212'],
          easing: 'easeInOutQuad',
          duration: 200,
          delay: 300
        });

        // Back button animation
        anime({
          targets: '.skip-back__container--back',
          translateY: '10',
          translateX: '-35%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Skip button animation
        anime({
          targets: '.skip-back__container--skip',
          translateY: '100',
          translateX: '-50%',
          easing: 'easeInOutQuad',
          duration: 700
        });

        // Remove active class for nav element
        headerNav.classList.add('active');

        // Animation for verity section
        word.hide({
          lettersAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: 0,
          },
          shapesAnimationOpts: {
            duration: () => anime.random(800,1000),
            opacity: {
              value: 0,
              duration: 200,
              easing: 'linear'
            }
          }
        });
        $.scrollify.disable();
      }
    }
  });

  // Glich effect for verity section start

  const getRandomNumber = (min, max) => (Math.random() * (max - min) + min);

  animateTitles();

  function animateTitles() {
    const title = document.querySelector('.verity__slogan');
    charming(title);
    const titleLetters = Array.from(title.querySelectorAll('span'));

    const glitch = (el,cycles) => {
      if ( cycles === 0 || cycles > 3 ) return;
      TweenMax.set(el, {
        x: getRandomNumber(-20,20),
        y: getRandomNumber(-20,20),
        color: ['#121212','#333', '#ccc'][cycles-1]
      });
      setTimeout(() => {
        TweenMax.set(el, {x: 0, y: 0, color: '#fff'});
        glitch(el, cycles-1);
      }, getRandomNumber(20,100));
    };

    const loop = (startAt) => {
      this.timeout = setTimeout(() => {
          const titleLettersShuffled = titleLetters.sort((a,b) => 0.5 - Math.random());
          const lettersSet = titleLettersShuffled.slice(0, getRandomNumber(1,titleLetters.length+1));
          for (let i = 0, len = lettersSet.length; i < len-1; ++i) {
            glitch(lettersSet[i], 3);
          }
          loop();
      }, startAt || getRandomNumber(500, 3000));
    }
    loop(1500);
  }

  // Glich effect for verity section END

  // Back to second section button

  $("#js-toSecond").click(function() {
    $.scrollify.enable();
    $.scrollify.previous();
  });

  // To third section button

  $("#js-toThird").click(function() {
    $.scrollify.next();
    $.scrollify.disable();
  });

});

/* Figures animation */

function fitElementToParent(el, padding) {
  let timeout = null;

  function resize() {
    if (timeout) clearTimeout(timeout);
    anime.set(el, {
      scale: 1
    });
    let pad = padding || 0;
    let parentEl = el.parentNode;
    let elOffsetWidth = el.offsetWidth - pad;
    let parentOffsetWidth = parentEl.offsetWidth;
    let ratio = parentOffsetWidth / elOffsetWidth;
    timeout = setTimeout(anime.set(el, {
      scale: ratio
    }), 10);
  }
  resize();
  window.addEventListener('resize', resize);
}

let layeredAnimation = (function() {

  let transformEls = document.querySelectorAll('.transform-progress');
  let layeredAnimationEl = document.querySelector('.layered-animations');
  let shapeEls = layeredAnimationEl.querySelectorAll('.shape');
  let triangleEl = layeredAnimationEl.querySelector('polygon');
  let trianglePoints = triangleEl.getAttribute('points').split(' ');
  let easings = ['easeInOutQuad', 'easeInOutCirc', 'easeInOutSine', 'spring'];

  fitElementToParent(layeredAnimationEl);

  function createKeyframes(value) {
    let keyframes = [];
    for (let i = 0; i < 30; i++) keyframes.push({
      value: value
    });
    return keyframes;
  }

  function animateShape(el) {

    let circleEl = el.querySelector('circle');
    let rectEl = el.querySelector('rect');
    let polyEl = el.querySelector('polygon');

    let animation = anime.timeline({
        targets: el,
        duration: function() {
          return anime.random(600, 2200);
        },
        easing: function() {
          return easings[anime.random(0, easings.length - 1)];
        },
        complete: function(anim) {
          animateShape(anim.animatables[0].target);
        },
      })
      .add({
        translateX: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-300, 300) : anime.random(-520, 520);
        }),
        translateY: createKeyframes(function(el) {
          return el.classList.contains('large') ? anime.random(-110, 110) : anime.random(-280, 280);
        }),
        rotate: createKeyframes(function() {
          return anime.random(-180, 180);
        }),
      }, 0);
    if (circleEl) {
      animation.add({
        targets: circleEl,
        r: createKeyframes(function() {
          return anime.random(32, 72);
        }),
      }, 0);
    }
    if (rectEl) {
      animation.add({
        targets: rectEl,
        width: createKeyframes(function() {
          return anime.random(64, 120);
        }),
        height: createKeyframes(function() {
          return anime.random(64, 120);
        }),
      }, 0);
    }
    if (polyEl) {
      animation.add({
        targets: polyEl,
        points: createKeyframes(function() {
          let scale = anime.random(72, 180) / 100;
          return trianglePoints.map(function(p) {
            return p * scale;
          }).join(' ');
        }),
      }, 0);
    }

  }

  for (let i = 0; i < shapeEls.length; i++) {
    animateShape(shapeEls[i]);
  }

})();

// End Figures animation

// Menu and logo animation

// $(window).scroll(function() {
//   if ($(this).scrollTop() > 250) {
//     $('header').addClass("sticky");
//   } else {
//     $('header').removeClass("sticky");
//   }
// });

// End menu and logo animation

/* To top button */

let offset = 300,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 1200,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 700,
  //grab the "back to top" link
  $back_to_top = $('.js-back-to-top');

//hide or show the "back to top" link
$(window).scroll(function() {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('back-to-top-is-visible'): $back_to_top.removeClass('back-to-top-is-visible back-to-top-fade-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('back-to-top-fade-out');
  }
});

/* End to top button */

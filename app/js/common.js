// Second block shapes animation

let options = {
  shapeColors: ['#ff4d4d','#333', '#ccc'],
  shapeTypes: ['rect','polygon', 'circle'],
  totalShapes: 1
}

let text = document.getElementById('text')

const word = new Word(text, options);

// Second block shapes animation end

$(document).ready(function() {

  // Full screen scroll init

  $.scrollify({
    section: ".section",
    overflowScroll: true,
    setHeights: false,
    before: function(index, section) {
      if (index == 1) {
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
              const ty = anime.random(-250,200);
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
      } else if (index == 0) {
        word.hide({
          lettersAnimationOpts: {
            duration: () => anime.random(800,1000),
            delay: () => anime.random(0,80),
            easing: 'easeInOutExpo',
            opacity: 0,
            translateY: '300%',
            rotateZ: () => anime.random(-50,50)
          },
          shapesAnimationOpts: {
            duration: 350,
            easing: 'easeOutExpo',
            translateX: t => [t.dataset.tx,anime.random(-25,25)],
            translateY: t => [t.dataset.ty,anime.random(-25,25)],
            scale: 1,
            rotate: 0,
            opacity: {
              value: 0,
              duration: 200,
              easing: 'linear'
            }
          }
        });
      } else if (index == 2) {
        word.hide({
          lettersAnimationOpts: {
            duration: 300,
            delay: (t, i) => (t.parentNode.children.length - i - 1) * 30,
            easing: 'easeOutExpo',
            opacity: 0,
            translateY: (t, i) => i % 2 === 0 ? '80%' : '-80%',
            rotate: (t, i) => i % 2 === 0 ? -25 : 25
          },
          shapesAnimationOpts: {
            duration: 50,
            easing: 'easeOutExpo',
            translateX: t => t.dataset.tx,
            translateY: t => t.dataset.ty,
            scale: 0,
            rotate: 0,
            opacity: {
              value: 0,
              duration: 50,
              easing: 'linear'
            }
          }
        });
        $.scrollify.disable();
      }
    }
  });

  // Back to second section button

  $("#toSecond").click(function() {
    $.scrollify.enable();
    $.scrollify.previous();
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

// Resize sticky header
$(window).scroll(function() {
  if ($(this).scrollTop() > 250) {
    $('header').addClass("sticky");
  } else {
    $('header').removeClass("sticky");
  }
});

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

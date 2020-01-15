$(document).ready(function() {

  // Full screen scroll init

  $.scrollify({
    section: ".section",
    // scrollbars: false,
    overflowScroll: true,
    standardScrollElements: ".test",
    setHeights: false,
    before: function(index, section) {
      if (index == 2) {
        // document.body.classList.add('scroll');
        $.scrollify.disable()
      } else {}
    }
  });

  // Back to second section button

  $("#toSecond").click(function() {
    $.scrollify.enable();
    $.scrollify.previous();
  });

  // Particle title

  let particles = [];
  let frequency = 20;
  // Popolate particles
  setInterval(
    function() {
      popolate();
    }.bind(this),
    frequency);


  let c1 = createCanvas({
    width: $(window).width(),
    height: $(window).height()
  });
  let c2 = createCanvas({
    width: $(window).width(),
    height: $(window).height()
  });
  let c3 = createCanvas({
    width: $(window).width(),
    height: $(window).height()
  });

  let tela = c1.canvas;
  let canvas = c1.context;

  // $("body").append(tela);
  $(".particle-title__wrapper").append(c3.canvas);
  writeText(c2.canvas, c2.context, "Creating\nthe Future");

  class Particle {
    constructor(canvas, options) {
      let random = Math.random();
      this.canvas = canvas;
      this.x = options.x;
      this.y = options.y;
      this.s = 3 + Math.random();
      this.a = 0;
      this.w = $(window).width();
      this.h = $(window).height();
      this.radius = 0.5 + Math.random() * 20;
      this.color = this.radius > 5 ? "#FF5E4C" : "#ED413C"; //this.randomColor()
    }

    randomColor() {
      let colors = ["#FF5E4C", "#FFFFFF"];
      return colors[this.randomIntFromInterval(0, colors.length - 1)];
    }

    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.canvas.lineWidth = 2;
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      //this.swapColor()
      this.x += Math.cos(this.a) * this.s;
      this.y += Math.sin(this.a) * this.s;
      this.a += Math.random() * 0.8 - 0.4;

      if (this.x < 0 || this.x > this.w - this.radius) {
        return false;
      }

      if (this.y < 0 || this.y > this.h - this.radius) {
        return false;
      }
      this.render();
      return true;
    }
  }


  function createCanvas(properties) {
    let canvas = document.createElement("canvas");
    canvas.width = properties.width;
    canvas.height = properties.height;
    let context = canvas.getContext("2d");
    return {
      canvas: canvas,
      context: context
    };

  }

  function writeText(canvas, context, text) {
    let size = 150;
    context.font = size + "px Bungee";
    context.fillStyle = "#111111";
    context.textAlign = "center";
    context.letterSpacing = 2 + 'px';
    let lineheight = 120;
    let lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      context.fillText(
        lines[i],
        canvas.width / 2,
        canvas.height / 2 + lineheight * i - lineheight * (lines.length - 1) / 3);

    }
  }

  function maskCanvas() {
    c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height);
    c3.context.globalCompositeOperation = "source-atop";
    c3.context.drawImage(c1.canvas, 0, 0);
    blur(c1.context, c1.canvas, 2);
  }

  function blur(ctx, canvas, amt) {
    ctx.filter = `blur(${amt}px)`;
    ctx.drawImage(canvas, 0, 0);
    ctx.filter = "none";
  }

  /*
   * Function to clear layer canvas
   * @num:number number of particles
   */
  function popolate() {
    particles.push(
      new Particle(canvas, {
        x: $(window).width() / 2,
        y: $(window).height() / 2
      }));


    return particles.length;
  }

  function clear() {
    canvas.globalAlpha = 0.03;
    canvas.fillStyle = "#111111";
    canvas.fillRect(0, 0, tela.width, tela.height);
    canvas.globalAlpha = 1;
  }

  function update() {
    clear();
    particles = particles.filter(function(p) {
      return p.move();
    });
    maskCanvas();
    requestAnimationFrame(update.bind(this));
  }

  update();
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


$('#menu-toggle').click(function(e) {
	e.preventDefault();
	
	$('#mobile-menu').addClass('active');
	$('body, html').addClass('modal-opened');
});

$('#menu-close').click(function(e) {
	e.preventDefault();
	
	$('#mobile-menu').removeClass('active');
	$('body, html').removeClass('modal-opened');
});

// MODAL SCRIPT

// Detect ios 11_0_x affected 
// NEED TO BE UPDATED if new versions are affected
var ua = navigator.userAgent,
	iOS = /iPad|iPhone|iPod/.test(ua),
//	iOS11 = /OS 11_0_1|OS 11_0_2|OS 11_0_3/.test(ua),
	iOS11 = /OS 11_(\d+)_?(\d+)?/.test(ua),
	scrolledPositionBeforeOpenModal;

// ios 11 bug caret position
if ( iOS && iOS11 ) {
	// Add CSS class to body
	$("body").addClass("iosBugFixCaret");
}

if(/Android/.test(navigator.appVersion)) {
	window.addEventListener("resize", function() {
		if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
			document.activeElement.scrollIntoView();
		}
	});
} 

var block = $('<div>').css({'height':'50px','width':'50px'}),
    indicator = $('<div>').css({'height':'200px'}),
    scrollbarWidth = 0;

$('body').append(block.append(indicator));
var w1 = $('div', block).innerWidth();    
block.css('overflow-y', 'scroll');
var w2 = $('div', block).innerWidth();
$(block).remove();
scrollbarWidth = (w1 - w2);

console.log(scrollbarWidth);

function openModal(hrefModal) {
	
	if ( iOS && iOS11 ) {
		scrolledPositionBeforeOpenModal = $(document).scrollTop();
	}
	$('body, .page-header').css('padding-right', scrollbarWidth);
	$('body, html').addClass('modal-opened');
	$(hrefModal).fadeIn(300);
}

function closeModals() {
	if (scrollbarWidth > 0) {
		$('.popup-block:not(:hidden)').fadeOut(200, function() {
			$('body, .page-header').css('padding-right', 0);
			$('body, html').removeClass('modal-opened');

			if ( iOS && iOS11 ) {
				$('html, body').scrollTop(scrolledPositionBeforeOpenModal);
			}
		});
	} else {
		$('body, .page-header').css('padding-right', 0);
		$('body, html').removeClass('modal-opened');

		if ( iOS && iOS11 ) {
			$('html, body').scrollTop(scrolledPositionBeforeOpenModal);
		}
		
		$('.popup-block:not(:hidden)').fadeOut(200);
	}
}

function showThanksModal() {
	$('.popup-block:not(:hidden)').fadeOut(300);
	
	$('#thanks-popup').fadeIn(300);
}

$('[data-toggle="modal"]').click(function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

$('[data-toggle="dismiss"]').click(function(e) {
	e.preventDefault();
	
	closeModals();
});

$('.popup-block__overlay').click(function(e) {
	var closeButton = $(this).children('.popup-block__close');
	
	if (e.target != this) {
//		return false;
	} else {
		closeModals();
	}
});

$('[data-toggle="dismiss"]').click(function(e) {
	e.preventDefault();
	
	closeModals();
});

$('.devs-block__slider').slick({
	slidesToShow: 6,
	slidesToScroll: 6,
	arrows: true,
	dots: false,
	infinite: true,
	prevArrow: '<a href="javascript:;" class="devs-block__arrow brand-arrow prev"></a>',
	nextArrow: '<a href="javascript:;" class="devs-block__arrow brand-arrow next"></a>',
	responsive: [
		{
			breakpoint: '1240', 
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: '768', 
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				arrows: false,
				dots: true
			}
		}
	]
});

$('.schedule__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: true,
	infinite: true,
	prevArrow: '<a href="javascript:;" class="schedule__arrow brand-arrow prev"></a>',
	nextArrow: '<a href="javascript:;" class="schedule__arrow brand-arrow next"></a>',
	responsive: [
		{
			breakpoint: '768', 
			settings: 'unslick'
		}
	]
});

$('.speakers__buttons-group a').click(function(e) {
	e.preventDefault();
	
	var thisIndex = $(this).index() + 1,
		thisSpeakers = $(this).attr('data-speakers');
	
	$(this).parent().removeClass('active-1 active-2 active-3').addClass('active-' + thisIndex);
	$('.speakers__dots-group .dot-item:eq(' + (thisIndex - 1) + ')').addClass('active').siblings().removeClass('active');

	$('#' + thisSpeakers).addClass('active');
	$('#' + thisSpeakers).slick('setPosition');
	$('#' + thisSpeakers).siblings().removeClass('active');
});

$('.speakers__dots-group .dot-item').click(function(e) {
	e.preventDefault();
	
	var thisIndex = $(this).index() + 1,
		thisSpeakers = $(this).attr('data-speakers');
	
	$('.speakers__buttons-group').removeClass('active-1 active-2 active-3').addClass('active-' + thisIndex);
	$(this).addClass('active').siblings().removeClass('active');
	
	$('#' + thisSpeakers).addClass('active');
	$('#' + thisSpeakers).slick('setPosition');
	$('#' + thisSpeakers).siblings().removeClass('active');
});

$('.speakers__main-type').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	mobileFirst: true,
	infinite: true,
	responsive: [
		{
			breakpoint: '767', 
			settings: 'unslick'
		}
	]
});

$(window).on('resize orientationchange', function() {
	$('.speakers__main-type').slick('resize');
});

$('.gifts-block__gifts-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	infinite: true,
	asNavFor: '.gifts-block__nav-slider'
});

$('.gifts-block__nav-slider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	focusOnSelect: true,
	centerMode: true,
	centerPadding: '0px',
	asNavFor: '.gifts-block__gifts-slider',
	prevArrow: '<a href="javascript:;" class="gifts-block__arrow brand-arrow prev"></a>',
	nextArrow: '<a href="javascript:;" class="gifts-block__arrow brand-arrow next"></a>'
});



$('.gallery__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: true
});

$('[data-toggle="anchor"]').click(function(e) {
	e.preventDefault();
	
	$('body, html').removeClass('modal-opened');
	
	var dataTarget = $(this).attr('href'),
		targetPos = $(dataTarget).offset().top - 30;
	
	if ($(window).width() > 767) {
		targetPos = $(dataTarget).offset().top - 300;
	}
	
	$('html,body').animate({
		scrollTop: targetPos
	}, 400);
	
	$('#mobile-menu').removeClass('active');
	
});

$('.partners-section__big-slider').slick({
	slidesToShow: 6,
	slidesToScroll: 6,
	arrows: true,
	dots: false,
	infinite: true,
	prevArrow: '<a href="javascript:;" class="partners-section__arrow brand-arrow prev"></a>',
	nextArrow: '<a href="javascript:;" class="partners-section__arrow brand-arrow next"></a>',
	responsive: [
		{
			breakpoint: '1240', 
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		},
		{
			breakpoint: '768', 
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}
	]
});

$('.nice-select').niceSelect();

$('#forgot-button').click(function(e) {
	e.preventDefault();
	
	$('#forgot-password-block').toggleClass('active');
});

$('#top-widget-toggle').click(function(e) {
	e.preventDefault();
	
	$('#top-widget').toggleClass('active');
});

$('#form-caption-button').click(function(e) {
	e.preventDefault(); 
	$('#form-caption-top').html('<b>Дмитро,</b> ви привели <span class="accent">18 чоловік</span><br>Ваше місце №42');

	
});

$('[type="tel"]').inputmask({
	"mask": "+38 (999) 999-99-99",
	"clearIncomplete": true,
	autoUnmask: false,
    removeMaskOnSubmit: false,
});

$('[data-toggle="video-y"]').click(function(e) {
	e.preventDefault();
	
	var dataYoutube = $(this).attr('data-youtube');
	
	$(this).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+ dataYoutube +'?autoplay=1" frameborder="0" allowfullscreen></iframe>');
});

function copyToClipboard(element, thisElem) {
	
	$(element).select();
	
	document.execCommand("Copy");

	var currText = $(thisElem).text();
	
	$(thisElem).text('Скопійовано!');
	$(thisElem).addClass('ready');
	
	
	setTimeout(function(e) {
		$(thisElem).text(currText);
		$(thisElem).removeClass('ready');
	}, 3000);
}

var regFrontBalls = document.getElementById('reg-front-balls');
var regBackBalls = document.getElementById('reg-back-balls');

var giftsBalls = document.getElementById('gifts-section-ballons');

if (regFrontBalls && regBackBalls) {
	var parallaxInstance = new Parallax(regFrontBalls, {
		relativeInput: false
	});

	var parallaxInstance2 = new Parallax(regBackBalls, {
		relativeInput: false
	});
}

if (giftsBalls) {
	var parallaxInstance3 = new Parallax(giftsBalls, {
		relativeInput: false
	});
}

setTimeout(function(e) {
	$('#tickets-block').addClass('active');
}, 30000);

$('#tickets-block-link').click(function() {
	$('#tickets-block').removeClass('active');
});

$('#tickets-block-close').click(function(e) {
	e.preventDefault();
	
	$('#tickets-block').removeClass('active');
});

$('#top-widget-register-link').click(function() {
	$('#top-widget').removeClass('active');
});


setTimeout(function(e) {
	$('#gifts-video-block').addClass('active');
}, 5000);

$('#gifts-video-close').click(function(e) {
	e.preventDefault();
	
	$('#gifts-video-block').removeClass('active');
});

$('#who-you-select').on('change', function(e) {
	
	if ($(this).val() == 'other') {
		$('.other-input-wrap').addClass('active');
	} else {
		$('.other-input-wrap').removeClass('active');
	}
});

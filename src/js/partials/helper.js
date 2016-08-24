$('.nav-general__list__ln, .nav-projects__list__ln').on('click', function(event) {
    var target = $( $(this).attr('href') );
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$.fn.clickOutsideThisElement = function (callback) {
  return this.each(function () {
    var self = this;
    $(document).click(function (e) {
      if (!$(e.target).closest(self).length) {
        callback.call(self, e)
      }
    })
  });
};

$(".nav-general__title").clickOutsideThisElement(function () {
  $(".nav-general__logo").removeClass('active');
  $(".nav-general__list").removeClass('active');
  $(".nav-general__deception").removeClass('active');
  }).click(function () {
  $(".nav-general__logo").addClass('active');
  $(".nav-general__list").addClass('active');
  $(".nav-general__deception").addClass('active');
});

$(".nav-projects__logo").clickOutsideThisElement(function () {
  $(".nav-projects__logo").removeClass('active');
  $(".nav-projects__list").removeClass('active');
  $(".nav-projects__deception").removeClass('active');
  }).click(function () {
  $(".nav-projects__logo").addClass('active');
  $(".nav-projects__list").addClass('active');
  $(".nav-projects__deception").addClass('active');
});



$(document).ready(function(){
    /*menu filled*/
	if($(window).scrollTop()>50){
		$('.page-header').addClass('filled');
	} else {
		$('.page-header').removeClass('filled');
	}
	$(window).scroll(function(){
		if($(window).scrollTop()>50){
			$('.page-header').addClass('filled');
		} else {
			$('.page-header').removeClass('filled');
		}
	});
	
	$('.apartment-plan').slick({
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
        autoplay: false,
        infinite: true,
        prevArrow: $(".apartment-plan__btn_prev"),
        nextArrow: $(".apartment-plan__btn_next")
    });

    $('.apartment-plan').on('afterChange', function(event, slick, currentSlide){
        $('.flats-nav__ln').removeClass('flats-nav__ln_active');
        $('.flats-nav__ln[data-flat =' +  currentSlide + ']').addClass('flats-nav__ln_active');
        if(currentSlide == 0){
          $('.idea-last').html('Idea-M');
        }if(currentSlide == 1){
          $('.idea-last').html('Idea-L');
        }if(currentSlide == 2){
          $('.idea-last').html('Idea-XL');
        }
    });

    $('.flats-nav').on('click', '.flats-nav__ln', function () {
        $('.apartment-plan').slick('slickGoTo', $(this).attr('data-flat'));
    });
	
	/*404*/
	$('.page__p404').css('min-height', $(window).height()+'px')
});


$('.projects').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.projects-info').text(i + '/' + slick.slideCount);
});

$('.quality-nav__ln').on('click', function() {
  $('.quality-nav__ln').removeClass('quality-nav__ln_active');
  $(this).addClass('quality-nav__ln_active');
});

$('.quality-nav__ln_1').on('click', function() {
  $('.quality-info__item_2, .quality-info__item_3').addClass('hide');
  $('.quality-info__item_1').removeClass('hide');

  $('.building-svg_2, .building-svg_3').addClass('hide');
  $('.building-svg_1').removeClass('hide');  
});

$('.quality-nav__ln_2').on('click', function() {
  $('.quality-info__item_1, .quality-info__item_3').addClass('hide');
  $('.quality-info__item_2').removeClass('hide');

  $('.building-svg_1, .building-svg_3').addClass('hide');
  $('.building-svg_2').removeClass('hide');  
});

$('.quality-nav__ln_3').on('click', function() {
  $('.quality-info__item_1, .quality-info__item_2').addClass('hide');
  $('.quality-info__item_3').removeClass('hide');

  $('.building-svg_1, .building-svg_2').addClass('hide');
  $('.building-svg_3').removeClass('hide');  
});

var animate = ScrollReveal({ reset: true });

animate.reveal('.animate-reveal', { duration: 500 });

(function($) {
  var defaults = {};

  $.fn.fixedscroll = function(opts) {

    var options = $.extend(defaults, opts);
    var el = $(this);
    var lockPosition = options.lockDom.offset().top;
    var offsetTop = options.offset.top || 0;
    var klass = options.klass;
    var elKlass = options.lockElement;

    $(window).bind('load scroll', function(e) {
      if ($(window).scrollTop() + offsetTop >= lockPosition) {
        elKlass.addClass(klass);
      } else {
      	elKlass.removeClass(klass);
      }
    });
  };
})(jQuery);


$('.page__part_quality').fixedscroll({
  'offset': {'top': 1000},
  'lockDom': $('.page__part_quality'),
  'lockElement': $('.building-svg_1, .building-svg_2, .building-svg_3'),
  'klass': 'animate'
});

var width = $(window).width();
/*
var topNavVal = 100;

if(width<740) {
	topNavVal = 40;
}

$(window).scroll(function() {
    if ($(this).scrollTop() <= topNavVal) {
      $(".nav-general__txt, .nav-projects__txt").addClass('show');
    }else{
      $(".nav-general__txt, .nav-projects__txt").removeClass('show');
    }
});
*/

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var count6 = 0;

$(".apartment-tenants__item__add-user_1").on('click', function () {
    count1++;
    $(".counter1").html(count1);
});
$(".apartment-tenants__item__delete-user_1").on('click', function () {
    $(".counter1").html(count1);
    if(count1 > 0){
      count1--;
      $(".counter1").html(count1);
    }
});


$(".apartment-tenants__item__add-user_2").on('click', function () {
    count2++;
    $(".counter2").html(count2);
});
$(".apartment-tenants__item__delete-user_2").on('click', function () {
    if(count2 > 0){
      count2--;
      $(".counter2").html(count2);
    }
});


$(".apartment-tenants__item__add-user_3").on('click', function () {
    count3++;
    $(".counter3").html(count3);
});
$(".apartment-tenants__item__delete-user_3").on('click', function () {
    $(".counter3").html(count3);
    if(count3 > 0){
      count3--;
      $(".counter3").html(count1);
    }
});


$(".apartment-tenants__item__add-user_4").on('click', function () {
    count4++;
    $(".counter4").html(count4);
});
$(".apartment-tenants__item__delete-user_4").on('click', function () {
    if(count4 > 0){
      count4--;
      $(".counter4").html(count1);
    }
});


$(".apartment-tenants__item__add-user_5").on('click', function () {
    count5++;
    $(".counter5").html(count5);
});
$(".apartment-tenants__item__delete-user_5").on('click', function () {
    if(count5 > 0){
      count5--;
      $(".counter5").html(count5);
    }
});


$(".apartment-tenants__item__add-user_6").on('click', function () {
    count6++;
    $(".counter6").html(count6);
});
$(".apartment-tenants__item__delete-user_6").on('click', function () {
    if(count6 > 0){
      count6--;
      $(".counter6").html(count6);
    }
});
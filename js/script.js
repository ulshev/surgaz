$(document).ready(function() {
	$(window).on('load', function () {
	    var $preloader = $('#preloader'),
		$spinner   = $preloader.find('#preloader img');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});
    
	

	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});

	
	$('.menu_button').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $('.menu_button').removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $('.menu_button').addClass('active');
		}
	});
	$(window).resize(function(){
	    var width = $(window).width();
	    if (width < 450) {
		    $('.main_menu').css("display", "none");
	    }else{
		    $('.main_menu').attr('style', '');
	    }
	});
	
	
	$('.new_catalogs').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">Предыдущая коллекция</span>',
		nextArrow: '<span class="slick-next">Следующая коллекция</span>',
	});
	
	$('.advantages_wrap').slick({
		dots: false,
		arrows: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		//fade: true,
		adaptiveHeight: true,
	});
	
	$('.certificates_wrap').slick({
		dots: false,
		arrows: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		  {
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 2,
		    }
		  }/*,
		  {
		    breakpoint: 450,
		    settings: {
		      slidesToShow: 1,
		    }
		  }*/
		]
	});
	
	$('.main_section .filials_wrap').slick({
		dots: false,
		arrows: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
		infinite: true,
		speed: 1000,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		  {
		    breakpoint: 800,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		  {
		    breakpoint: 450,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	$('.photo_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev"></span>',
		nextArrow: '<span class="slick-next"></span>',
	});
	
	$(".text_block").mCustomScrollbar({
	    autoHideScrollbar: false,
	});
	
	
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	
	$(".brands_wrap div").hover(function () {
	    $('.brands_wrap div').toggleClass("hovered");
	});
    
});


// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
    $('.parallax').parallax();

    $(".button-collapse").sideNav();

    $('.modal-trigger').leanModal();

    $(window).scroll(function(){
    	var parallaxheight = 700
    	var wScroll = $(this).scrollTop();
	    	if (wScroll <= parallaxheight) {
	    	$('.meteor-icon').css({
	    		'transform' : 'translate('+ wScroll /6 +'%, '+ wScroll /3 +'%)'
	    	});
	    }	
    });
// SMOOTH SCROLL
    $(".brand-logo").click(function() {
        $('html,body').animate({
            scrollTop: target.offset().top},
             'slow');
    });
    $("#portfolio-nav").click(function() {
        $('html,body').animate({
            scrollTop: $("#portfolio").offset().top},
            'slow');
    });

    $("#skill-set-nav").click(function() {
        $('html,body').animate({
            scrollTop: $("#skill-set").offset().top},
            'slow');
    });

    $("#contact-nav").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            'slow');
    });
});
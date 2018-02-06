
(function($){
	$(document).ready(function(){


//hamburger (mobile-size)
$(".hamburger").on("click", function(){
	$("nav").slideToggle();
})
$(window).resize(function(){
	if ($(window).width() > 580) {
		$("nav").css("display", "inline-block")
	} else {
		$("nav").css("display", "none")
	}
}); 

$(window).resize(function(){
	if ($(window).width() < 580) {
		$("ul").removeClass("flex")
	} else {
		$("ul").addClass("flex")
	}
});
$('.one').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.about').offset().top + 'px'
        }, 300);
    });
$('.two').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.services').offset().top + 'px'
        }, 300);
    });
$('.three').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.gallery').offset().top + 'px'
        }, 300);
    });
$('.four').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.blog').offset().top + 'px'
        }, 300);
    });
$('.five').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.contact').offset().top + 'px'
        }, 300);
    });
})
})(jQuery);
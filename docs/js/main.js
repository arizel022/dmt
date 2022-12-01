$(function() {
    new WOW().init();
    $('.menu__list').hide();

    $('.menu__btn').click(function () {
        $(this).toggleClass('active');
        $('.menu__list').slideToggle();
        // $('body').toggleClass('lock');
    });

    $('.menu-hide').click(function () {
        $('.menu__btn').removeClass('active');
        $('.menu__list').hide();
    });

    $(".logo, .menu-hide").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 2000);
    });

    $('#quickToTop').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
			$('#quickToTop').fadeIn();} 
		else {
            $('#quickToTop').fadeOut();}
    });
    $('#quickToTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
	});
    
    $('.program__btn').click(function () {
        $('.program__btn').removeClass('active');
        $(this).addClass('active');
        $('.program__item').removeClass('active');
    });

    $('#btn-html').click(function () {
        $('#card-html').addClass('active');
    });
    $('#btn-css').click(function () {
        $('#card-css').addClass('active');
    });
    $('#btn-des').click(function () {
        $('#card-des').addClass('active');
    });
    $('#btn-cont').click(function () {
        $('#card-cont').addClass('active');
    });
    $('#btn-pls').click(function () {
        $('#card-pls').addClass('active');
    });
});

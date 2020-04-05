const body = document.getElementsByTagName('BODY')[0];

$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        let nav = document.getElementById('nav-menu');
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        if ( nav.classList.contains('open') ){
            body.style.overflow = 'hidden';
        }
        else {
            body.style.overflow = 'visible';
        }
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        body.style.overflow = 'visible';
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});
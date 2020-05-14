const body = document.getElementsByTagName('BODY')[0];

$(document).ready(function () {

    // Disable scrolling when nav menu is entered
    $('.menu-toggler').on('click', function () {
        let nav = document.getElementById('nav-menu');
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        if (nav.classList.contains('open')) {
            body.style.overflow = 'hidden';
        }
        else {
            body.style.overflow = 'visible';
        }
    });

    // Exit nav menu (Enable scroll and remove class 'open')
    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        body.style.overflow = 'visible';
    });

    // Set scrollbar position to location of selected section in nav bar
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

    // Set scrollbar to top of page
    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});
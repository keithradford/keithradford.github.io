function noScroll() {
    window.scrollTo(0, 0);
}

$(document).ready(function(){
    $('.menu-toggler').on('click', function(){
        let nav = document.getElementById('nav-menu');
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
        if ( nav.classList.contains('open')){
            window.addEventListener('scroll', noScroll);
        }
        else {
            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.top-nav .nav-link').on('click', function(){
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        window.removeEventListener('scroll', noScroll);
    });

    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});
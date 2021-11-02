$(function () {


    /*Nav Toggle */
    /* ======================================================== */
    $('.burger').click(function(event)
    {
        $('.line-1, .line-2, .line-3, .nav').toggleClass('active');
    });



    /* Slider */
    /* ======================================================== */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        dots: true
    });

});


window.onload = function( ){
 let preloader = document.getElementById('preloader');
 preloader.style.display = 'none';
};
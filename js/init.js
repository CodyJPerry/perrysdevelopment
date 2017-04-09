(function($){
  $(function(){
    $('.button-collapse').sideNav();

    // Testmonial Slider
    $('.slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      speed: 600,
      mobileFirst: true, //Mobile settings
      swipe: true,
      swipeToSlide: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
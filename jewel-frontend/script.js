function main() {
  (function () {
    'use strict';

    // Smooth scrolling for anchor links
    $('a.scroll-nav').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

    // navBar behavior on scroll
    $(window).bind('scroll', function() {
      var navHeight = $(window).height() - 100;
      if ($(window).scrollTop() > navHeight) {
        $('.navBar-default').addClass('on');
      } else {
        $('.navBar-default').removeClass('on');
      }
    });

    // Scrollspy for body
    $('body').scrollspy({
      target: '.navBar-default',
      offset: 80
    });

  }());
}

main();

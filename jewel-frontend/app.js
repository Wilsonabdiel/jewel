function main() {
    'use strict';
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a.scroll-nav').forEach(function(anchor) {
      anchor.addEventListener('click', function(event) {
        event.preventDefault();
  
        var targetId = this.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
  
        if (target) {
          var offset = target.offsetTop - 40;
          scrollSmoothly(offset, 900);
        }
      });
    });
  
    // navBar behavior on scroll
    window.addEventListener('scroll', function() {
      var navHeight = window.innerHeight - 100;
      var navBar = document.querySelector('.navBar-default');
  
      if (window.scrollY > navHeight) {
        navBar.classList.add('on');
      } else {
        navBar.classList.remove('on');
      }
    });
  
    // Scrollspy for body
    document.body.addEventListener('scroll', function() {
      // Implement scrollspy logic here using window.scrollY or other methods
    });
  }
  
  function scrollSmoothly(offset, duration) {
    var startingY = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  
    function animateScroll(currentTime) {
      var timeElapsed = currentTime - startTime;
      var progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startingY + progress * (offset - startingY));
  
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
  
    requestAnimationFrame(animateScroll);
  }
  
  main();
  
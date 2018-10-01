$(document).ready(function() {
    
    /* For the sticky navigation */
   $('.js--section-features').waypoint(function(direction) {
       if (direction == "down") {
           $('nav').addClass('sticky');                       /* When the user scrolls down, the class "sticky" will be added */
       } else {
           $('nav').removeClass('sticky');                    /* When the user scrolls up, remove the class "sticky" */
       }
   }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);     /* There is an animation that scrolls to the top                                                                                           in 1,000 milliseconds */
    });
    
    
     $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);  /* There is an animation that scrolls to the top                                                                                            in 1,000 milliseconds */
    });
    
    
    
    
    
    /* Navigation scroll */
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
    
    
  
    
    
    
    
    
    /* Animations on scroll */

    
    /* Fade-In function for Section Features Icons*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    
     /* Fade-In-Up for iPhone Image and plan-box */
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    
    
     /* Fade-In for Country Images */
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    
    
     /* Animated Pulse for plan-box */
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    })
    

    /* Mobile nav */
    /* Mobile Navigation iPhone small screen Open and Close effect */
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);             /* jQuery slideToggle opens and closes a box, in 200 milliseconds */
        
        /* This changes the icons with each other, it swaps them in and out */
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
    
    
    
});

$(document).ready(function () {
    // new wow.js
    new WOW().init();
    /// setting different screen
    var viewport_change = $(window).width((index, width) => {
        if (width < 992) {
            $(".navbar").addClass("scroll-background");
  
        }
        else {
            $(window).scroll(function () {
                var sc = $(window).scrollTop();
                if (sc > 300) {
                    $(".navbar").addClass("scroll-background");
                }
                else {
                    $('.navbar').removeClass("scroll-background");
                }
            });
        }
    })
  
    
    swiper = new Swiper('.swiper-container', {

      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
     
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        paginationClickable: true,
        /*dynamicBullets: true,*/
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    setInterval("swiper.slidePrev()", 5000);
  
  });
  
    /* image hover*/
    $("figure").mouseleave(
      function() {
        $(this).removeClass("hover");
      }
    );
  
    /* Swiper Sliding*/
   
  
  
      /* here stars scrolling icon */
  
        $(document).ready(function() {
          /*
            var defaults = {
            containerID: 'toTop', // fading element id
            containerHoverID: 'toTopHover', // fading element hover id
            scrollSpeed: 1200,
            easingType: 'linear' 
            };
          */
                    
          $().UItoTop({ easingType: 'easeOutQuart' });
                    
          });
  
       //here ends scrolling icon
       
    //for smooth scrolling
    /*scrolling script */
  
      jQuery(document).ready(function($) {
        $(".scroll").click(function(event){   
          event.preventDefault();
          $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
        });
      });
  
   //scrolling script
  
  /*accordion*/
      var acc = document.getElementsByClassName("accordion");
      var i;
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
  
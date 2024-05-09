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
});

  /* image hover*/
  $("figure").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

  /* Swiper Sliding*/
  swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
     autoplay: {
      delay: 4000,
      disableOnInteraction: false,
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

//-------------------------------------//
// init Masonry

var $grid = $('.grid').masonry({
  itemSelector: 'none', // select none at first
  columnWidth: '.grid__col-sizer',
  gutter: '.grid__gutter-sizer',
  percentPosition: true,
  stagger: 30,
  // nicer reveal transition
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
});

// get Masonry instance
var msnry = $grid.data('masonry');

// initial items reveal
$grid.imagesLoaded( function() {
  $grid.removeClass('are-images-unloaded');
  $grid.masonry( 'option', { itemSelector: '.grid__item' });
  var $items = $grid.find('.grid__item');
  $grid.masonry( 'appended', $items );
});

//-------------------------------------//
// hack CodePen to load pens as pages

var nextPenSlugs = [
  '202252c2f5f192688dada252913ccf13',
  'a308f05af22690139e9a2bc655bfe3ee',
  '6c9ff23039157ee37b3ab982245eef28',
];

function getPenPath() {
  var slug = nextPenSlugs[ this.loadCount ];
  if ( slug ) {
    return 'https://s.codepen.io/desandro/debug/' + slug;
  }
}

//-------------------------------------//
// init Infinte Scroll

$grid.infiniteScroll({
  path: getPenPath,
  append: '.grid__item',
  outlayer: msnry,
  status: '.page-load-status',
});

   /*Initialize imagesLoaded with jQuery,Detect if images have all been loaded.*/ 
   $(function(){
    $('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
});

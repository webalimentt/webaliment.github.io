
$(document).ready(function() {
$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
          items:2,
          nav:false
        },
        768:{
            items:3,
            nav:false
        },
        1070:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
});

$(document).ready(function() {
  $("#my-menu").mmenu({
    extensions: [ 'effect-menu-slide', "fx-listitems-fade", 'position-right' ],
    navbar: {
      title: 'ЛЕГЕ АРТИС'
    },
    "counters": true,
               "iconbar": {
                  "add": true,
                  "top": [
                     "<a href='/'><i class='fa fa-home'></i></a>",
                  ],
                  "bottom": [
                     "<a href='#/' target='_blank'><i class='fab fa-vk'></i></a>",
                     "<a href='#/'><i class='fab fa-facebook-f'></i></a>",
                     "<a href='#/' target='_blank'><i class='fab fa-instagram'</i></a>"
                  ],
                }
  }, {
     // configuration
     offCanvas: {
        pageSelector: "#my-page"
     }
  });

  var api = $('#my-menu').data('mmenu');
  api.bind('open:start', function() {
    $('.hamburger').addClass('is-active');
  });
  api.bind('close:before', function() {
    $('.hamburger').removeClass('is-active');
    })
 });
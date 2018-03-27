$('.slider-nav').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
 $('input[type="range"]').on("input change", function(e){
 e.preventDefault();
   var slideno = $(this).val();
   $('.slider-nav').slick('slickGoTo', slideno-1 );
 });
//Responsive classic
$('.responsive').slick({
  dots: false,
  arrows: true,
  nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

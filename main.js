$(document).ready(() => {
  $('.btns .menu-btn').click(() => {
    $('.menu-btn .first').toggleClass('first-rotate');
    $('.menu-btn .third').toggleClass("third-rotate");
    $('.menu-btn .second').toggleClass('second-rotate');
    $('.menu-btn span').toggleClass('menu-btn-color')
    $('.menu').toggleClass("menu-drop");
  });

  $(".testemonial .slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    mobileFirst: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        }
      }
    ],
 
  });
});


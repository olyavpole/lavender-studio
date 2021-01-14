$(function () {
  $('.header__burger').click(function () {
    $('.menu__list').toggleClass('active');
  });

  $('.sale__slider').slick({
    dots: true,
    arrows: false
  });

  $('.spoiler__top').click(function () {
    $('.spoiler__top').not($(this)).removeClass('active');
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $('.spoiler__content').not($(this).next()).removeClass('active');
  });

  $('[data-fancybox="gallery"]').fancybox({
  });

  $('.our-masters__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });


  $('.single-master__diplomas-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}); 
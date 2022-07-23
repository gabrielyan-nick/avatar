$(function () {
  $(".design-slider").slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-l" src="images/al.svg" alt="">',
    nextArrow: '<img class="arrow arrow-r" src="images/ar.svg" alt="">',
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          
        },
      },
    ],
  });
});

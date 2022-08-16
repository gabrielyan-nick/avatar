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

$(function () {
  $(".header__nav").on("click", function () {
    $(".menu").toggleClass("menu--active");
  });
});

// const btn = document.querySelector('.header__nav'),
//       menu = document.querySelector('.menu');

// btn.addEventListener('click', () => {
//   menu.classList.toggle('menu--active');
// });


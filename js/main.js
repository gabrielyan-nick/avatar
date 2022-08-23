'use strict';

window.addEventListener('DOMContentLoaded', () => {

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

  const deadline = '2022-09-01';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.now(),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          min = Math.floor(t / (1000 * 60) % 60),
          sec = Math.floor((t / 1000) % 60);

    return {
      t,
      days, 
      hours,
      min,
      sec
    };
  }

  function getZero(num) {
    if (num < 10 && num >= 0) {
      return `0${num}`;
    } else {
      return num;
    }
  }


  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          min = timer.querySelector('#min'),
          sec = timer.querySelector('#sec'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();      

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      min.innerHTML = getZero(t.min);
      sec.innerHTML = getZero(t.sec);

      if (t.t <= 0) {
        clearInterval(timeInterval);
      }

    }
  }

setClock('.timer', deadline);




});





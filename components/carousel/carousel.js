import Swiper, {Pagination} from 'swiper';

Swiper.use([ Pagination]);
import $ from 'jquery'


$(function () {
    // debugger;
    var mySwiper = new Swiper('.tcs-carousel--best-seller', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.15,
        spaceBetween: 20,
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }
    })

    var mySwiper = new Swiper('.tcs-carousel--warmth-slider', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1.4,
        spaceBetween: 20,
        breakpoints: {
            768: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 40
            }
          }
    })

    var mySwiper = new Swiper('.tcs-carousel--guides', {
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      slidesPerView: 1.15,
      spaceBetween: 20,
      breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }
  })
})
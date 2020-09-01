import Swiper, {Pagination} from 'swiper';

Swiper.use([ Pagination]);
import $ from 'jquery'


$(function () {
    // debugger;
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        slidesPerView: 1.15,
        // slidesPerView: "auto",
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
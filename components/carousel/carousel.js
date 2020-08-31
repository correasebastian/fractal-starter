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

        // slidesPerView: 1.2,
        slidesPerView: "auto",
        spaceBetween: 20,

        // // Navigation arrows
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },

        // // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })
})
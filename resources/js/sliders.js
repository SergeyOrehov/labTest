
const reviews = new Swiper('.reviews-slider-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 1500,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 575px
        576: {
            slidesPerView: 3,
            /*      spaceBetween: 27,*/
        },
    },

    navigation: {
        nextEl: `.reviews__slider .swiper-button-next`,
        prevEl: `.reviews__slider .swiper-button-prev`,
    },
})

const reviews = new Swiper('.reviews-slider-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 1500,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 24,
        },
        // when window width is >= 575px
        576: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        768: {
            spaceBetween: 32,
            slidesPerView: 2,
        },
        1220: {
            slidesPerView: 3,
        },
    },

    navigation: {
        nextEl: `.reviews__slider .swiper-button-next`,
        prevEl: `.reviews__slider .swiper-button-prev`,
    },

    pagination: {
        el: ".swiper-pagination",
        // type: "fraction",
        clickable: true,
    },
})
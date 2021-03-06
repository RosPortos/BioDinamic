document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 1500,

        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".promo .swiper-button-next",
            prevEl: ".promo .swiper-button-prev",
        },
    });



    var swiper3 = new Swiper(".therapy__slider", {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: ".therapy-button-next",
            prevEl: ".therapy-button-prev",
        },
        observer: true,
        observeParents: true,
        breakpoints: {
            767: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });

    const swiper5 = new Swiper(".reviews-swiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
            snapOnRelease: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            820: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });

    const swiper6 = new Swiper(".video__slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: ".video-button-next",
            prevEl: ".video-button-prev",
        },
        breakpoints: {
            1440: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1.1,
                spaceBetween: 15,
            },
        },
    });
});
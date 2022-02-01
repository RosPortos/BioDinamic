document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper(".promo-swiper", {
        slidesPerView: 1,
        loop: true,
        speed: 3000,

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


    const swiper2 = new Swiper(".main-slider", {
        effect: "fade",
        speed: 1200,
        direction: "vertical",
        mousewheel: true,
        breakpoints: {
            1025: {
                allowTouchMove: false,
            }
        }
    });

    let menu = document.querySelector('.menu');

    swiper2.on('slideChange', function () {
        if (swiper2.activeIndex > 0) {
            menu.classList.add('color-blue');
        } else {
            menu.classList.remove('color-blue');
        }
    });


    const swiper3 = new Swiper(".reviews-swiper", {
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


    let test = document.querySelectorAll('.reviews-item');

    console.log(test.length);



});
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


    const swiper2 = new Swiper(".main-slider", {
        effect: "fade",
        speed: 1200,
        preventInteractionOnTransition: true,
        direction: "vertical",
        // mousewheel: true,
        breakpoints: {
            1025: {
                allowTouchMove: false,
            }
        }
    });

    let menu = document.querySelector('.menu');
    let logo = document.querySelector('.logo');

    swiper2.on('slideChange', function () {
        if (swiper2.activeIndex > 0) {
            menu.classList.add('color-blue');
            logo.classList.add('color-blue');
        } else {
            menu.classList.remove('color-blue');
            logo.classList.remove('color-blue');
        }
    });

    function sliderWheelControl() {
        const slider = document.querySelector('.main-slider');

        if (slider) {
            slider.addEventListener('wheel', (e) => {
                let deltaY = e.deltaY;

                if ($(".about__right").is(e.target) || $(".about__right").has(e.target).length != 0 && window.innerWidth > 920) {
                    const aboutRight = document.querySelector('.about__right');

                    if (Math.round(aboutRight.scrollHeight) - Math.round(aboutRight.scrollTop) == Math.round(aboutRight.clientHeight) && deltaY > 0) {
                        swiper2.slideNext();
                    } else if (aboutRight.scrollTop == 0 && deltaY < 0) {
                        swiper2.slidePrev();
                    }
                } 
                else if ($(".about").is(e.target) || $(".about").has(e.target).length != 0 && window.innerWidth <= 920) {
                    const about = document.querySelector('.about');

                    if (Math.round(about.scrollHeight) - Math.round(about.scrollTop) == Math.round(about.clientHeight) && deltaY > 0) {
                        swiper2.slideNext();
                    } else if (about.scrollTop == 0 && deltaY < 0) {
                        swiper2.slidePrev();
                    }
                }
                else if ($(".insta__list").is(e.target) || $(".insta__list").has(e.target).length != 0) {
                    const instaList = document.querySelector('.insta__list');

                    if (Math.round(instaList.scrollHeight) - Math.round(instaList.scrollTop) == Math.round(instaList.clientHeight) && deltaY > 0) {
                        swiper2.slideNext();
                    } else if (instaList.scrollTop == 0 && deltaY < 0) {
                        swiper2.slidePrev();
                    }
                } else {
                    if (deltaY > 0) {
                        swiper2.slideNext();
                    } else if (deltaY < 0) {
                        swiper2.slidePrev();
                    }
                }
            });
        }
    }

    sliderWheelControl();


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
let swiper2 = undefined;
let screenWidth;

function initSwiper() {
    screenWidth = $(window).width();
    const slider = document.querySelector('.main-slider');

    const getScrollbarWidth = () => {
        const outer = document.createElement('div');

        outer.style.position = 'absolute';
        outer.style.top = '-9999px';
        outer.style.width = '50px';
        outer.style.height = '50px';
        outer.style.overflow = 'scroll';
        outer.style.visibility = 'hidden';

        document.body.appendChild(outer);
        const getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
        document.body.removeChild(outer);

        return getScrollbarWidth;
    };

    function sliderWheelControl(e) {
        let deltaY = e.deltaY;

        if (swiper2) {
            if ($(".about").is(e.target) || $(".about").has(e.target).length != 0) {
                const about = document.querySelector('.about');

                if (Math.round(about.scrollHeight) - Math.round(about.scrollTop) == Math.round(about.clientHeight) && deltaY > 0) {
                    swiper2.slideNext();
                } else if (about.scrollTop == 0 && deltaY < 0) {
                    swiper2.slidePrev();
                }
            }
            else if ($(".insta").is(e.target) || $(".insta").has(e.target).length != 0) {
                const insta = document.querySelector('.insta');

                if (Math.round(insta.scrollHeight) - Math.round(insta.scrollTop) == Math.round(insta.clientHeight) && deltaY > 0) {
                    swiper2.slideNext();
                } else if (insta.scrollTop == 0 && deltaY < 0) {
                    swiper2.slidePrev();
                }
            } else {
                if (deltaY > 0) {
                    swiper2.slideNext();
                } else if (deltaY < 0) {
                    swiper2.slidePrev();
                }
            }

            if ($('.swiper-slide-active').hasClass('about') || $('.swiper-slide-active').hasClass('insta')) {
                let right = getScrollbarWidth();
                $('.page-link__right').css('right', right);
                $('.page-link__top ').css('right', right);
                $('.page-link__bottom').css('right', right);
                $('.header').css('right', right);
                $('.header').addClass('active');
                $('.page-link ').addClass('active');
            } else {
                $('.header').css('right', 0);
                $('.header').removeClass('active');
                $('.page-link ').removeClass('active');
            }
        }
    }

    if (screenWidth > 1023 && swiper2 == undefined && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        console.log('true');
        swiper2 = new Swiper(".main-slider", {
            effect: "fade",
            speed: 1200,
            preventInteractionOnTransition: true,
            direction: "vertical",
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

        slider.addEventListener('wheel', sliderWheelControl);
        $('.main-page').addClass('active');

    } else {
        if (screenWidth < 1024 && swiper2 != undefined) {
            swiper2.destroy();
            swiper2 = undefined;
            $('.main-page').removeClass('active');
            $('.header').css('right', 0);
        }
    }
}

initSwiper();


var optimizedResize = (function () {
    var callbacks = [],
        running = false;

    // fired on resize event
    function resize() {
        if (!running) {
            running = true;

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            } else {
                setTimeout(runCallbacks, 66);
            }
        }
    }

    // run the actual callbacks
    function runCallbacks() {
        callbacks.forEach(function (callback) {
            callback();
        });

        running = false;
    }

    // adds callback to loop
    function addCallback(callback) {
        if (callback) {
            callbacks.push(callback);
        }
    }

    return {
        // public method to add additional callback
        add: function (callback) {
            if (!callbacks.length) {
                window.addEventListener("resize", resize);
            }
            addCallback(callback);
        },
    };
})();

optimizedResize.add(function () {
    initSwiper();
});
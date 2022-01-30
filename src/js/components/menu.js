document.addEventListener('DOMContentLoaded', function () {

    function menu() {
        let ww = $(window).width();
        let bp = 767;

        function muuXY(e, that) {
            if (!e) e = window.event;
            var x, y;
            if (e.targetTouches) {
                x = e.targetTouches[0].pageX - e.target.offsetLeft;
                y = e.targetTouches[0].pageY - e.target.offsetTop;
            } else if (that) {
                x = e.clientX - that.offsetLeft;
                y = e.clientY - that.offsetTop;
            }
            return [x, y];
        }


        $(".menu").mousemove(function (e) {
            if (ww > bp) {
                var xy = muuXY(e, this);

                if (xy[0] < 0 || xy[1] < 0 || xy[0] > 65 || xy[1] > 65) {
                    $(".menu .burger").css({
                        "-webkit-transform": "translate3d(0,0,0)",
                        "transform": "translate3d(0,0,0)"
                    });
                } else {
                    $(".menu .burger").css({
                        "-webkit-transform": "translate3d(" + (xy[0] - 32) + "px, " + (xy[1] - 32) + "px,0)",
                        "transform": "translate3d(" + (xy[0] - 32) + "px, " + (xy[1] - 32) + "px,0)"
                    });
                }
            }
        }).mouseleave(function (e) {
            $(".menu .burger").css({
                "-webkit-transform": "translate3d(0,0,0)",
                "transform": "translate3d(0,0,0)"
            });
        });
    }

    menu();


    $('.burger').on('click', function () {
        $('.burger,.nav ').toggleClass('active');
    });





});
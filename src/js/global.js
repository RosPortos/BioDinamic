document.addEventListener('DOMContentLoaded', function () {



    if ($(window).width() <= 920) {
        $('.tab').on('click', function (event) {
            event.preventDefault();

            $(this).find('.tabs-content').slideToggle(300);
            $(this).toggleClass('tab-active');
            $(this).siblings().removeClass('tab-active');
            $(this).siblings().find('.tabs-content').slideUp(300);

        });
    } else {
        $('.tab').on('click', function (event) {
            event.preventDefault();

            $($(this).siblings()).removeClass('tab-active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).slideUp(300).removeClass('tabs-content-active');
            $(this).addClass('tab-active');
            $($(this).attr('href')).slideDown(300).addClass('tabs-content-active');
        });
    }


    function changePage() {
        $("body").css("display", "none");

        $("body").fadeIn(1000);

        let linkLocation;

        $("a.link-page").click(function (event) {
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        });

        function redirectPage() {
            window.location = linkLocation;
        }
    }

    changePage();


    $(".phone-input").mask("+375 (99) 999-99-99");



});
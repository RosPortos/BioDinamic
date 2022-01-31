document.addEventListener('DOMContentLoaded', function () {

    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).slideUp(300).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).slideDown(300).addClass('tabs-content-active');
    });


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



});
document.addEventListener('DOMContentLoaded', function () {

    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab-active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).slideUp(300).removeClass('tabs-content-active');

        $(this).addClass('tab-active');
        $($(this).attr('href')).slideDown(300).addClass('tabs-content-active');
    });



});
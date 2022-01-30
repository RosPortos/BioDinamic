document.addEventListener('DOMContentLoaded', function () {

    $('.promo-item__text').each(function () {
        var newText = $(this).text().split(' ').join('</span> <span>');
        newText = '<span>' + newText + '</span>';

        $(this).html(newText);
    });


});
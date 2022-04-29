$(function () {

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('.serch_input').addClass('d-none')
        }
        else {
            $('.serch_input').removeClass('d-none');
        }
    });

    $('.serch_text').focus(function () {
        $('.mag').hide()
    });
    $('.serch_text').blur(function () {
        $('.mag').show()
    });


})



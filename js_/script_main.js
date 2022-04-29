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

    $('.comment-heart').click(function(){
        var id_check = $(this).val();
        console.log(id_check)
    });

    $("#alpreah_input").keydown(function(key) {
        if (key.keyCode == 13) {
            comment_text = $('#comment_input').val()
            html = `<div class="position-relative d-flex align-items-center mb-1">
            <div class="font-weight col-2">이민기</div>
            <div class="overtext comment_text">${comment_text}</div>
            <!-- <div class="col mx-2">더보기</div> -->
            <div class="position-absolute comment-heart"><i class="fa-regular fa-heart"></i></div>
            </div>`
            $('#comment_input').val('')
            $('#comment_post').append(html)
        }
    });
})

function likeon(){
    $('.like_button_no_click').hide();
    $('.like_button_click').show();
}

function likeoff(){
    $('.like_button_click').hide();
    $('.like_button_no_click').show();
}








$(() => {

    $('a').click(function (e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault()
        }
    })

    $('.testTrigger').click(() => {
        localStorage.clear()
        $('.todoList').html('')
        $('.fullScreenFilter').fadeIn(300)
        $('.alertModalBox').fadeIn(500)
    })
    $('.asideSubTitle').hover(function () {
        $(this).siblings('.asideIntro').slideDown(500)
        $(this).siblings('.asideIntro').mouseout(() => {
            setTimeout(() => {
                $(this).siblings('.asideIntro').slideUp(500)
            }, 5000)
        })
    })
})

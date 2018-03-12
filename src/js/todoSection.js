$(() => {

    $('.todoAddTrigger').click(() => {
        $('.todoModalBox').fadeIn(500)
        $('.fullScreenFilter').fadeIn(300)
        $('#addTodoTitle').attr('autofocus', 'autofocus')
    })

    
    $('.todoFoldTrigger').click(() => {
        $('.todoDetail').slideUp(300)
        $('.todoDropBtn').html('∨')
    })

    $('.todoClearTrigger').click(() => {
        $('.alertModalBox').fadeIn(500)
        $('.fullScreenFilter').fadeIn(300)
        $('.alertModalBox').children('.modalTitle').text('CleanUp TODOList')
        $('.alertModalBox').children('.modalContent').children('.modalText').text('Are You Sure You Want to CleanUp TODOList ??')
        $('.modalText').css({ color: '#000', fontSize: '36px' })
        
        //! 設置submit button 執行特定form動作
        $('.alertModalBox').children('.modalContent').children('.modalSubmitBtn').text('Yes!')
    })



    $('.todoDropBtn').click(function () {
        //! FIX ME !!!!!!!!!!!!!

        //* 取Link所屬 $('.todoDetail')
        let showDetail = $(this).parent().siblings()
        
        //* 初始為 向下
        //* 當等於下 Drop 目標 & 換成上
        //* else (方向為上時) 目標已經啟動(將目標關閉 且轉成下)
        if ($(this).text() === '∨') {
            $(this).html('∧')
            showDetail.slideDown(300)
            // $('.todoDetail').slideUp()
            //* 除了此之外的 SlideUp
        } else {
            $(this).html('∨')
            showDetail.slideUp(300)
        }
    })
})

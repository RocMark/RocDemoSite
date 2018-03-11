if (typeof window.jQuery === 'undefined') {
    // alert('jQuery didn\'t loaded') //* CDN未裝
}
$(() => {

    $('.todoDropBtn').click(function () {
        //! FIX ME !!!!!!!!!!!!!
        let showDetail = $(this).parent().siblings()


        // $('.todoDetail').slideUp()
        // $('.todoLink').html(showDetail.attr('data-status'))

        showDetail.attr('data-status', 'active')
        showDetail.slideDown(300)
        showDetail.attr('data-status', 'hidden')
        // if (showDetail.attr('data-status') === 'hidden') {
        // }

        // //! Sometime Bugged
        // if ($('.todoDetail').attr('data-status') === 'active') {
        //     $('.todoDetail').attr('data-status', 'hidden')
        // }
        // if (showDetail.attr('data-status') === 'hidden') {
        //     showDetail.attr('data-status', 'active')
        //     showDetail.slideDown(300)
        //     console.log(showDetail.attr('data-status'))
        // } else {
        //     $('.todoDetail').attr('data-status', 'hidden')
        //     showDetail.slideUp()
        //     console.log(showDetail.attr('data-status'))
        // }
    })






    //* Site/Folder/Time/ArticleName
    let artList = [{
        time: '2018/3/10',
        folder: 'HTML',
        tags: ['HTML', 'CSS', 'JS'],
        title: 'ArticleTitle',
        content: 'lorem300',
    }]

    $('.testTrigger').click(() => {
        addPageNav()
    })

    // ? Next Pre 之後再做

    function addPageNav() {
        // let artCount = artList.length
        let artCount = 4
        let pageCount = 1
        artCount = (artCount < 5 ? 1 : pageCount = Math.ceil(artCount / 5))

        createPageNavLoop(pageCount)

        function createPageNavLoop(pages) {
            for (let i = 0; i < pages; i += 1) {
                //* 創造pageNav
            }
        }
    }

    $('.todoForm').submit((e) => {
        let val = $('#todoInputTitle').val()
        $('.testText').html(val)
        e.preventDefault()
    })

})

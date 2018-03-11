$(() => {
    //* Site/Folder/Time/ArticleName
    let artList = [{
        time: '2018/3/10',
        folder: 'HTML',
        tags: ['HTML', 'CSS', 'JS'],
        title: 'ArticleTitle',
        content: 'lorem300',
    }]

    
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

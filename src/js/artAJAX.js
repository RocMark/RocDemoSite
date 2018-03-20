$(() => {

    let artList = [
        {
            id: 1,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'one',
        }, {
            id: 2,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'two',
        }, {
            id: 3,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'three',
        }, {
            id: 4,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'four',
        }, {
            id: 5,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'five',
        }, {
            id: 6,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'six',
        }, {
            id: 7,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'seven',
        }, {
            id: 8,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'eight',
        }, {
            id: 9,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'nine',
        }, {
            id: 10,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'ten',
        }, {
            id: 11,
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'eleven',
        },
    ]

    let testList = [
        {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'one',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'one',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'one',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'one',
        },
    ]

    let targetList = artList

    let perPage = 5

    //* make article Class  store data & function


    // ? page1 初始 onload & render
    renderArticle(targetList, 1)
    addPageNav(targetList, 1)

    $('.readMoreBtn').click(() => {
        let targetArticle = $(this).attr('data-link')
        let filterArticle = attr => attr.title === targetArticle
    })


    $('#pageNavNextBtn').click(() => {

        let currentPage = +$('article').first().attr('data-page')
        let targetPage = currentPage + 1
        let pageCount = +$('.pageNavLink').last().attr('data-page')

        if (targetPage === pageCount) {
            $('#pageNavNextBtn').hide(300)
        }

        if (currentPage === pageCount) {
            $('#pageNavPreBtn').show(300)
        }

        if (targetPage > 1) {
            $('#pageNavPreBtn').show(300)
        }

        $('.pageNavLink.pageNavActive').next().addClass('pageNavActive')
        $('.pageNavLink.pageNavActive').first().removeClass('pageNavActive')
        renderArticle(targetList, targetPage)
    })

    $('#pageNavPreBtn').click(() => {

        let currentPage = +$('article').first().attr('data-page')
        let targetPage = currentPage - 1
        let pageCount = +$('.pageNavLink').last().attr('data-page')

        if (currentPage === 2) {
            $('#pageNavPreBtn').hide(300)
        }

        if (targetPage < pageCount) {
            console.log(targetPage)
            $('#pageNavNextBtn').show(300)
        }

        if (targetPage === 0) {
        }


        $('.pageNavLink.pageNavActive').prev().addClass('pageNavActive')
        $('.pageNavLink.pageNavActive').last().removeClass('pageNavActive')
        renderArticle(targetList, targetPage)
    })

    $('.pageNavLink').click(function () {

        let currentPage = +$('article').attr('data-page')
        let targetPage = +$(this).attr('data-page')
        let pageCount = +$('.pageNavLink').last().attr('data-page')

        if (targetPage === 1) {
            $('#pageNavPreBtn').hide(300)
            $('#pageNavNextBtn').show(300)
        } else {
            $('#pageNavPreBtn').show(300)
            $('#pageNavNextBtn').show(300)
        }

        if (targetPage === pageCount) {
            $('#pageNavNextBtn').hide(300)
        }

        if (targetPage === currentPage) {
            //! 待改成 自製 ModalBox
            console.log('You are on the page')
        } else {
            $('.pageNavLink').removeClass('pageNavActive')
            $(this).addClass('pageNavActive')
            renderArticle(targetList, targetPage)
        }
    })

    function renderArticle(data, page) {
        $('.targetList').fadeOut(300)
        let htmlString = ''
        //* 首頁為 page = 1
        // 修正array從0始 與 頁數從1始之差
        let mathFix = page - 1
        let start = 0 + (mathFix * perPage)
        let end = (perPage - 1) + (mathFix * perPage)

        //! 文章總數小於end 造成後面的文章 undefined而出錯
        let endFix = (data.length > end ? end : (data.length - 1))

        for (let i = start; i <= endFix; i += 1) {
            htmlString += `
                <article data-page="${page}">
                    <header class="artMeta">
                        <div class="artTime">
                            <i class="far fa-calendar-alt"></i>
                            <time>${data[i].time}</time>
                        </div>
                        <div class="artFolder">
                            <i class="fas fa-folder"></i>
                            <a class="artLink" href="#">${data[i].folder}</a>
                        </div>
                        <div class="artTags">
                            <div class="artTag">
                                <i class="fas fa-tag">
                                </i><a class="artLink" href="#">${data[i].tags}</a>
                            </div>
                        </div>
                    </header>
                    <h2 class="artTitle">
                        <a href="#">${data[i].title}</a>
                    </h2>
                    <p class="artPreView">${data[i].content}</p>
                    <button class="readMoreBtn" data-link="${data[i].id}">ReadMore</button>
                </article>
                <hr>
            `
        }
        $('.artList').html(htmlString)
        $('.artList').fadeIn(500)
    }
    function addPageNav(data) {
        let artCount = data.length
        let pageCount = (artCount < perPage ? 1 : Math.ceil(artCount / perPage))
        createPageNavLoop(pageCount)
    }

    function createPageNavLoop(pages) {
        let pageNavPreBtn = $('#pageNavPreBtn')
        let pageNavNextBtn = $('#pageNavNextBtn')
        let pageNavOne = $('#pageNavOne')
        pageNavPreBtn.hide()
        if (pages === 1) {
            pageNavNextBtn.hide()
        } else {
            pageNavNextBtn.append()
            let htmlString = ''
            for (let i = 1; i < pages; i += 1) {
                let pageNum = i + 1
                //! 等 pushState 寫好回來改 link a href
                htmlString += `
                <button class="pageNavLink" href="/${pageNum}" data-page="${pageNum}" >${pageNum}</button>
                `
            }
            pageNavOne.after(htmlString)
        }
    }
})

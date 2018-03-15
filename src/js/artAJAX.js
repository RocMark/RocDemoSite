$(() => {
    // ? Loop Tags 後面處理
    // *  a 的 Link 未設
    // ? Next Pre 之後再做

    let artList = [{
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
            content: 'two',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'three',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'four',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'five',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'six',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'seven',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'eight',
        },
    ]

    // ? page1 初始 onload & render
    renderArticle(artList, 1)


    addPageNav(artList, 1)

    $('#pageNavNextBtn').click(() => {
        //* 待寫 render 下5 
        //* 同理待寫 render 上5 pre
    })

    $('.pageNavLink').click(function () {

        let currentPage = $('article').attr('data-page')
        let clickPageNavNum = $(this).text()

        if ($(this).attr('data-page') === currentPage) {
            //! 待改成 自製 ModalBox
            console.log('You are on the page')
        } else {
            $('.pageNavLink').removeClass('pageNavActive')
            $(this).addClass('pageNavActive')
            renderArticle(artList, clickPageNavNum)
        }
    })
    
    function renderArticle(data, page) {
        let htmlString = ''
        //* 首頁為 page = 1
        // 修正array從0始 與 頁數從1始之差
        let mathFix = page - 1
        let start = 0 + (mathFix * 5)
        let end = 4 + (mathFix * 5)

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
                    <button class="readMoreBtn" data-link="#">ReadMore</button>
                </article>
                <hr>
            `
        }
        $('.artList').hide()
        $('.artList').html(htmlString)
        $('.artList').fadeIn(500)
    }

    function addPageNav(data) {
        let artCount = data.length
        let pageCount = (artCount < 5 ? 1 : Math.ceil(artCount / 5))
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


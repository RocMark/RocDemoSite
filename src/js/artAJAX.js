$(() => {
    //! 構思切換 pageNav
    // ? Loop Tags 後面處理
    // *  a 的 Link 未設
    // ? Next Pre 之後再做


    //* 首次render [0]~[4] 1~5文章
    //* 首次要render pageNav 得 文章總數

    //* 點擊pageNav 切換 頁面
    //* 先 get page count 數

    //* Ex: 3 始為11 (1+2*5)  End為15 (3*5)

    //* 


    let artList = [{
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        }, {
            time: '2018/3/10',
            folder: 'HTML',
            tags: ['HTML', 'CSS', 'JS'],
            title: 'ArticleTitle',
            content: 'lorem300',
        },
    ]

    //* Render Article

    renderArticle(artList)
    addPageNav(artList)



    function renderArticle(data) {
        let pageNav = $('.pageNav')

        let htmlString = ''
        for (let i = 0; i < data.length; i += 1) {
            htmlString += `
                <article data-artCount="${i}">
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
        pageNav.before(htmlString)
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
        //* 創造pagination
        //* 單一頁 (創1 隱藏 pre&next)
        pageNavPreBtn.hide()
        if (pages === 1) {
            pageNavNextBtn.hide()
        } else {
            pageNavNextBtn.append()
            let htmlString = ''
            //* 若要保留 PageOne
            for (let i = 1; i < pages; i += 1) {
                let pageNum = i + 1
                htmlString += `
                <a href="/${pageNum}">${pageNum}</a>
                `
            }
            pageNavOne.after(htmlString)
        }
    }
})

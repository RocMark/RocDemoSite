document.addEventListener('DOMContentLoaded', () => { 
    
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

    let pageCountSetUp = document.querySelector('#pageCountSetUp')
    pageCountSetUp.max = artList.length
})

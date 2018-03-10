if (typeof window.jQuery === 'undefined') { 
    // alert('jQuery didn\'t loaded') //* CDN未裝
}
$(() => {
    $(window).scroll(() => {
        // $('.sideNav').hide(500)
    })

    $('.asideNavLink').click(function () {
        clearAsideStatus()
        let target = $(`.asideSection[data-sectionName=${$(this).html()}]`)
        target.addClass('asideActive')
        $(this).addClass('asideLinkActive')
    })
    
    function clearAsideStatus() {
        $('.asideSection').removeClass('asideActive')
        $('.asideNavLink').removeClass('asideLinkActive')
    }

    //* Site/Folder/Time/ArticleName
    let articleList = [{
        time: '2018/3/10',
        folder: 'HTML',
        tags: ['HTML', 'CSS', 'JS'],
        title: 'ArticleTitle',
        content: 'lorem300',
    }]

    
    
})

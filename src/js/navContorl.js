$(() => {

    $('.asideToggle').click(() => {
        $('.sideNav').animate({ width: 'toggle' }, 350)
    })

    fixedNav()
    
    function fixedNav() {
        // Scroll Nav Fixed & Prevent Jumping
        let mainNav = $('.mainNav')
        mainNav.wrap('<div class="navJumpFix"></div>')
        $('.navJumpFix').height(mainNav.outerHeight())
        
        const navOffset = mainNav.offset().top
        $(window).scroll(() => {
            let scrollPosition = $(window).scrollTop()
            if (scrollPosition > navOffset) {
                mainNav.addClass('navSticky')
            } else {
                mainNav.removeClass('navSticky')
            }
        })
    }
})

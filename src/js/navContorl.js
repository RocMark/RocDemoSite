$(() => {

    $('.fullScreenFilter,.modalBtn[type="submit"],.modalExitBtn').click(() => {
        hideModalBox()
    })

    $(window).scroll(() => { 
        // hideModalBox()
        hideAside() 
    })

    $('main').click(() => { 
        hideAside() 
        hideModalBox()
    })

    function hideModalBox() {
        $('.fullScreenFilter').fadeOut(100)
        $('.modalBox').fadeOut(200)
    }
    
    function hideAside() { 
        //* 待修改成滑左出去
        $('.sideNav').hide(500)
    }


    $('.back2Top, footer').click(() => { scroll2Top() })
    
    //* smooth scrolling
    function scroll2Top() { $('html').animate({ scrollTop: $('html').offset().top }, 1000) }

    $('.asideToggle').click(() => { $('.sideNav').animate({ width: 'toggle' }, 350) })

    fixedNav()

    let back2Top = $('.back2Top')
    // function showBack2Top() { back2Top.show(500) }

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
                back2Top.show(500)
            } else {
                back2Top.hide(500)
                mainNav.removeClass('navSticky')
            }
        })
    }
})

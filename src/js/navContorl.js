$(() => {

    // ---------------------------------------
    //* asideNav
    document.querySelector('.asideNavLink').style.borderBottom = '3px solid #930077'

    $('.asideNavLink').click(function () {
        $('.asideNavLink').css({ borderBottom: '3px solid #fff' })
        $('.asideSection').removeClass('asideActive')
        let target = $(`.asideSection[data-sectionName=${$(this).html()}]`)
        target.addClass('asideActive')
        $(this).addClass('asideLinkActive')
        $(this).css({ borderBottom: '3px solid #930077' })
    })
    

    $(window).scroll(() => { 
        // hideModalBox()
        // hideAside() 
    })

    
    function hideModalBox() {
        $('.fullScreenFilter').fadeOut(100)
        $('.modalBox').fadeOut(200)
    }

    function hideAside() { 
        //* 待修改成滑左出去
        $('.sideNav').hide(500)
    }

    $('main').click(() => { 
        hideAside() 
        hideModalBox()
    })

    $('.fullScreenFilter,.modalExitBtn,.modalCancelBtn').click(() => {
        hideModalBox()
    })

    // ---------------------------------------
    //* back2TopBtn
    $('.back2Top, footer').click(() => { scroll2Top() })
    // smooth scrolling
    function scroll2Top() { $('html').animate({ scrollTop: $('html').offset().top }, 1000) }

    // ---------------------------------------
    //* asideToggle
    $('.asideToggle').click(() => { $('.sideNav').animate({ width: 'toggle' }, 350) })
    // ---------------------------------------
    //* fixed Nav
    fixedNav()
    let back2Top = $('.back2Top')
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

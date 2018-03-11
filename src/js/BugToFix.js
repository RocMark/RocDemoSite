$(() => {
    $('.asideNavLink').click(function () {
        //! FIX ME !!
        $('.asideNavLink').css({ borderBottom: '3px solid #fff' })
        $('.asideSection').removeClass('asideActive')
        let target = $(`.asideSection[data-sectionName=${$(this).html()}]`)
        target.addClass('asideActive')
        $(this).addClass('asideLinkActive')
        $(this).css({ borderBottom: '3px solid #930077' })
    })
})

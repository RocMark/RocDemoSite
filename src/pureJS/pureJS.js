document.addEventListener('DOMContentLoaded', () => { 
    
    let asideNavLink = document.querySelectorAll('.asideNavLink')
    let asideSection = document.querySelectorAll('.asideSection')
    document.querySelector('.asideNavLink').style.borderBottom = '3px solid #930077'
    asideNavLink.addEventListener('click', () => {
        $(this).style.borderBottom = '3px solid #930077'
        asideSection.classList.remove('asideActive')

        let targetArea = $(this).textContent()

        // let target = $(`.asideSection[data-sectionName=${$(this).html()}]`)
        // let target = 

        target.classList.add('asideActive')
        $(this).classList.add('asideLinkActive')
        $(this).style.borderBottom = '3px solid #930077'
    })

    // document.querySelectorAll('.')
})

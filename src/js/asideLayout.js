document.addEventListener('DOMContentLoaded', () => {

    //! forEach處 試著用事件代理

    let sideNav = (function () {

        function init() {
            this.cacheDom()
            this.activateFirstLink()
            this.introAnimation()
        }

        function cacheDom() {
            //* 待查此種寫法是否更好
            this.main = document.querySelector('.sideNav')
            this.firstLink = this.main.querySelector('.asideNavLink')
            this.links = this.main.querySelectorAll('.asideNavLink')
            this.sections = this.main.querySelectorAll('.asideSection')
            this.subTitles = this.main.querySelectorAll('.asideSubTitle')
        }

        function activateFirstLink() {
            this.firstLink.classList.add('asideLinkActive')
        }

        function navControl(link) {
            this.deactivateAll()
            this.activateLink(link)
            this.activateSection(link)
        }
        
        function introAnimation() {
            this.subTitles.forEach((elem) => {
                elem.addEventListener('mouseover', (e) => {
                    //* 待弄成 slideDown & 待補隱藏設定
                    elem.nextElementSibling.style.display = 'block'
                })
            })
        }

        //* 外部可以觸及的放在 return中
        return {

        }
    }())

    // let sideNav = {
    //     init() {
    //         this.cacheDom()
    //         this.activateFirstLink()
    //         this.introAnimation()
    //     },
    //     cacheDom() {
    //         //* 待查此種寫法是否更好
    //         this.main = document.querySelector('.sideNav')
    //         this.firstLink = this.main.querySelector('.asideNavLink')
    //         this.links = this.main.querySelectorAll('.asideNavLink')
    //         this.sections = this.main.querySelectorAll('.asideSection')
    //         this.subTitles = this.main.querySelectorAll('.asideSubTitle')
    //     },
    //     activateFirstLink() {
    //         this.firstLink.classList.add('asideLinkActive')
    //     },
    //     navControl(link) {
    //         this.deactivateAll()
    //         this.activateLink(link)
    //         this.activateSection(link)
    //     },
    //     introAnimation() {
    //         this.subTitles.forEach((elem) => {
    //             elem.addEventListener('mouseover', (e) => {
    //                 //* 待弄成 slideDown & 待補隱藏設定
    //                 elem.nextElementSibling.style.display = 'block'
    //             })
    //         })
    //     },
    // }

    function activateLink(target) {
        target.classList.add('asideLinkActive')
    }
    function activateSection(target) {
        let targetText = target.textContent
        let targetSection = document.querySelector(`.asideSection[data-sectionName=${targetText}]`)
        targetSection.classList.add('asideActive')
    }
    function deactivateAll() {
        sideNav.sections.forEach((section) => {
            section.classList.remove('asideActive')
        })
        sideNav.links.forEach((link) => {
            link.classList.remove('asideLinkActive')
        })
    }
    
    sideNav.init()

    sideNav.main.addEventListener('click', bindEvents)

    function bindEvents(e) {
        let classStr = e.target.classList.value
        if (classStr.match('asideNavLink')) {
            // sideNav.navControl(e.target)
            deactivateAll()
            activateLink(e.target)
            activateSection(e.target)
        } else {
            
        }
    }
})


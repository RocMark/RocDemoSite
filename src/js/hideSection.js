document.addEventListener('DOMContentLoaded', () => { 

    //! 待把 ModalBox & fullScreenFilter 合併

    let mainSecton = document.querySelector('main')
    let sideNav = document.querySelector('.sideNav')
    let fullScreenFilter = document.querySelector('.fullScreenFilter')
    
    let modalBox = document.querySelectorAll('.modalBox')
    function hideModalBox() {
        modalBox.forEach((elem) => {
            elem.style.display = 'none'
        })
    }
    

    mainSecton.addEventListener('click', () => {
        hideModalBox()
    })

    window.addEventListener('scroll', () => {
        hideAside()
    })

    function hideAside() {
        //* 待修改成滑左出去
        sideNav.style.display = 'none'
    }

    

    // $('.fullScreenFilter,.modalExitBtn,.modalCancelBtn').click(() => {
    //     hideModalBox()
    // })
})

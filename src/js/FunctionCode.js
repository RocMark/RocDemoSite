document.addEventListener('DOMContentLoaded', () => { 

    let allLinks = document.querySelectorAll('a')
    allLinks.forEach((elem) => {
        // if (elem.href === 'http://localhost:3000/#') {
        if (elem.href.indexOf('#')) {
            // ? indexOf 查詢是否包含該字串
            elem.addEventListener('click', (e) => {
                e.preventDefault()
            })
        }
    })

    let testTrigger = document.querySelector('.testTrigger')
    let alertModalBox = document.querySelector('#alertModalBox')
    let fullScreenFilter = document.querySelector('#fullScreenFilter')
    
    testTrigger.addEventListener('click', () => {
        // TODO: 待做成 fadeIn
        alertModalBox.style.display = 'block'
        // animated(alertModalBox, 'fadeIn')
    })


    //* animation
    let siteName = document.querySelector('.siteName')
    function animated(obj, effect) {
        obj.classList.add('animated')
        //! 僅需移除 effect 再次加入即可重啟動畫
        obj.classList.add(effect)
        //* 待優化改寫
        setTimeout(() => {
            obj.classList.remove(effect)
        }, 1500)
    }
})

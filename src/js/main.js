if (typeof window.jQuery === 'undefined') {
    // alert('jQuery didn\'t loaded') //* CDN未裝
}
$(() => {
    document.querySelector('.asideNavLink').style.borderBottom = '3px solid #930077'

    $('.testTrigger').click(() => {
        // $('.alertModalBox').fadeIn(500)
    })
    $('.artPreView').on('cut copy paste', function (e) {
        e.preventDefault()
    })
    
    // let todoList = []
    // localStorage.setItem('todoList', JSON.stringify(todoList))
    // console.log(localStorage.getItem('todoList'))
    // console.log(JSON.parse(localStorage.getItem('todoList')))

    // initLocalStorage()

    $('#todoForm').submit((e) => {
        e.preventDefault()
        //* get form value
        let todoTitle = $('#addTodoTitle').val()
        let todoLink = $('#addTodoLink').val()
        let todoContent = $('#addTodoContent').val()
        //* todo 模版
        let todoObject = {
            title: 'title',
            link: 'url',
            content: 'content',
        }
        //* 賦予值
        todoObject.title = todoTitle
        todoObject.link = todoLink
        todoObject.content = todoContent
        // console.log(todoObject)
        if (localStorage.getItem('todoList') === null) {
            localStorage.setItem('todoList', '[]')
        }
        let todoJSON = JSON.parse(localStorage.getItem('todoList'))
        todoJSON.push(todoObject)
        localStorage.setItem('todoList', JSON.stringify(todoJSON))
        $('#todoForm').trigger('reset')
        console.log(JSON.parse(localStorage.getItem('todoList')))
    })
})

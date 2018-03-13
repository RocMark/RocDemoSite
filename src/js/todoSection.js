$(() => {

    $('.todoClearTrigger').click(() => {
        $('.alertModalBox').fadeIn(500)
        $('.fullScreenFilter').fadeIn(300)

        let modalBoxTemplate = {
            title: 'CleanUp TODOList',
            text: 'Are You Sure You Want to CleanUp TODOList ??',
            event: 'todoCleanUp',
        }
        remakeModalBox(modalBoxTemplate)
        //! 設置submit button 執行特定form動作
        todoCleanBtnListener()
    })
    
    function remakeModalBox(template) {
        $('.alertModalBox').children('.modalTitle').text(template.title)
        $('.alertModalBox').children('.modalContent').children('.modalText').text(template.text)
        $('.alertModalBox').children('.modalContent').children('.modalSubmitBtn').attr('id', template.event)
    }

    function todoCleanBtnListener() {
        $('#todoCleanUp').click(() => {
            localStorage.clear()
            $('.todoList').html('')
            $('.fullScreenFilter').fadeOut(100)
            $('.modalBox').fadeOut(200)
        })
    }

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
        // console.log(JSON.parse(localStorage.getItem('todoList')))

        let LocalTodoList = JSON.parse(localStorage.getItem('todoList'))

        renderTodoList(LocalTodoList)

        $('#todoForm').trigger('reset')
        $('.fullScreenFilter').fadeOut(100)
        $('.modalBox').fadeOut(200)
    })

    $('.todoAddTrigger').click(() => {
        $('.todoModalBox').fadeIn(500)
        $('.fullScreenFilter').fadeIn(300)
        $('#addTodoTitle').attr('autofocus', 'autofocus')
    })


    $('.todoFoldTrigger').click(() => {
        $('.todoDetail').slideUp(300)
        $('.todoDropBtn').html('∨')
    })

    todoBtnListener()

    function renderTodoList(data) {
        //* 動態產生側邊欄 TODO
        let htmlString = ''
        for (let i = 0; i < data.length; i += 1) {
            htmlString += `
            <li class="todoItem">
                <div class="todoTitle">
                    <a class="todoLink" target="_blank" href="${data[i].link}">${data[i].title}</a>
                    <button class="todoBtn todoRemoveBtn">X</button>
                    <button class="todoBtn todoDropBtn">∨</button>
                </div>
                <div class="todoDetail" data-status="hidden">${data[i].content}</div>
            </li>
            `
        }
        $('.todoList').html(htmlString)
        todoBtnListener()
    }

    todoSampleInit()

    function todoSampleInit() {
        let todoSample = [{
            title: 'TODO Sample',
            link: '#',
            content: 'Lorem123',
        }]
        localStorage.setItem('todoList', JSON.stringify(todoSample))
    }

    function todoBtnListener() {


        $('.todoDropBtn').on('click', function () {
            //! FIX ME !!!!!!!!!!!!!
            //* 取Link所屬 $('.todoDetail')
            let showDetail = $(this).parent().siblings()
            //* 初始為 向下
            //* 當等於下 Drop 目標 & 換成上
            //* else (方向為上時) 目標已經啟動(將目標關閉 且轉成下)
            if ($(this).text() === '∨') {
                $(this).html('∧')
                showDetail.slideDown(300)
                // $('.todoDetail').slideUp()
                //* 除了此之外的 SlideUp
            } else {
                $(this).html('∨')
                showDetail.slideUp(300)
            }
        })

        //* 刪除todo
        //* click ->search title
        //* 比對 localStorage 刪除
        //* render
        $('.todoRemoveBtn').click(function () {
            let todoList = JSON.parse(localStorage.getItem('todoList'))
            let todoTitle = $(this).siblings('.todoLink').text()
            let delTitle = attr => attr.title !== todoTitle
            let newTodoList = todoList
                .filter(delTitle)
                .map(attr => attr)
            console.log(newTodoList)
            localStorage.setItem('todoList', JSON.stringify(newTodoList))
            renderTodoList(newTodoList)
        })
    }
})

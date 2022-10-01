window.addEventListener('DOMContentLoaded', (event) => {    

    let tarefa = document.getElementById('task')
    let nova_tarefa = document.getElementById('new-task-add')
    let add_btn = document.querySelector('.add-task-btn')
    let confirm = document.querySelector('.confirm')
    

    add_btn.addEventListener('click', (event) => {
        event.preventDefault()
        nova_tarefa.innerHTML += tarefa.value + '<br><br>'
        confirm.innerHTML += '<div class"confirm"><button class="done">✔</button><button class="cancel">✕</button></div></br>'
        tarefa.value = ''
        tarefa.focus()     

        

    })
        
})



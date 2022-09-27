window.addEventListener('DOMContentLoaded', (event) => {    

    let tarefa = document.getElementById('task')
    let nova_tarefa = document.getElementById('new-task-add')
    let add_btn = document.querySelector('.add-task-btn')

    add_btn.addEventListener('click', (event) => {
        event.preventDefault()
        nova_tarefa.innerHTML += tarefa.value + '<br><br>'
        tarefa.value = ''
        tarefa.focus()
        

    })
        
})

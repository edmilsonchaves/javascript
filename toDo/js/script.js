let tarefas = []

let contador = -1

window.addEventListener('DOMContentLoaded', (event) => {    

    let tarefa = document.getElementById('task')
    let nova_tarefa = document.getElementById('new-task-add')
    let add_btn = document.querySelector('.add-task-btn')
    let confirm = document.querySelector('.confirm')
    let done = document.querySelector('.done')
    let cancel = document.querySelector('.cancel')
    

    add_btn.addEventListener('click', (event) => {
        event.preventDefault()
        
    
        if (tarefa.value == '') {
            alert('Campo inválido, insira uma tarefa!')
        } else {
            let teste = nova_tarefa.innerHTML += tarefa.value + '<br><br>'
        confirm.innerHTML += '<div class"confirm"><button class="done" onclick="taskDone()">✔</button><button class="cancel" onclick="deleteTask()">✕</button></div></br>'
        tarefas.push(tarefa.value)
        tarefa.value = ''
        contador++
        tarefa.focus()  
        }       

    })
        
})

function taskDone() {

    let tsk = document.querySelector('#new-task-add').textContent
    
    if (tsk == tarefas[contador]){
        document.querySelector('#new-task-add').style.color = 'grey'
        document.querySelector('#new-task-add').style.textDecoration = 'line-through'
    } else {
        document.querySelector('#new-task-add').style.textDecoration = 'none'
        document.querySelector('#new-task-add').style.color = 'black'
    }   
    document.querySelector('#new-task-add').style.textDecoration = 'none'
    document.querySelector('#new-task-add').style.color = 'black'

    }
    

function deleteTask() {    
    
    if (document.querySelector('#new-task-add').style.textDecoration == 'line-through') {
        document.querySelector('#new-task-add').innerHTML = ''
        document.querySelector('.confirm').innerHTML = ''
    } else {
        alert('A tarefa ainda não foi concluída!')

    }

}




// função de adicionar tarefa.

function addTask() {

    // titulo da tarefa
    let tasksTitle = document.querySelector("#tasks-title").value;

    if (tasksTitle) {

        // clonar template
        const template = document.querySelector(".template");
        
        const newTask = template.cloneNode(true);
        
        //adicionar titulo
        newTask.querySelector(".task-title").textContent = tasksTitle;

        //remover classes desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adicionar na lista
        let list = document.querySelector("#task-list");
        list.appendChild(newTask);

        // limpar
        document.querySelector("#tasks-title").value = "";

        //remover tarefa
        const removeBtn = newTask.querySelector(".remove-btn");
        
        removeBtn.addEventListener("click", function () {
            removeTask(this);
        })

        // finalizar tarefa
        const done = newTask.querySelector(".done-btn").addEventListener("click", function () {
            doneTask(this);
        });


    }
};

// função remover tarefa
function removeTask(task) {
    task.parentNode.remove(true);
}


// função tarefa realizada
function doneTask(task) {
    
    const taskToComplete = task.parentNode;
    
    taskToComplete.classList.toggle("done");

}


// evento de adicionar tarefa
let addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (event) {

    event.preventDefault();

    addTask();
});


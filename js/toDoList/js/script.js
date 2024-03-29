
let inputTarefa = document.querySelector('#inputTarefa')
let buttonAddTask = document.querySelector('#buttonAddTask')
let listaTarefas = document.querySelector('.listaTarefas')

inputTarefa.addEventListener('keypress', (e) => {

	if(e.keyCode == 13) {		
		let tarefa = {
			nome: inputTarefa.value,
			id: gerarID()
		}

		adicionarTarefa(tarefa)

	}
})


buttonAddTask.addEventListener('click', (e) => {

	let tarefa = {
		nome: inputTarefa.value,
		id: gerarID()

	}

	adicionarTarefa(tarefa)
})

// função responsável por gerar identificador da tarefa.

function gerarID() {

	return Math.floor(Math.random() * 1000)
}

function adicionarTarefa(tarefa) {

	let li = criarTagLI(tarefa)
	listaTarefas.appendChild(li)
	inputTarefa.value = ''
	inputTarefa.focus()


}

function criarTagLI(tarefa) {

	let li = document.createElement('li')
	li.id = tarefa.id 

	let span = document.createElement('span')
	span.classList.add('textoTarefa')
	span.innerHTML = tarefa.nome

	let div = document.createElement('div')

	let btnEditar = document.createElement('button')
	btnEditar.classList.add('btnAcao')
	btnEditar.innerHTML = '<i class="fa fa-pencil"></i>'
	btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')')

	let btnExcluir = document.createElement('button')
	btnExcluir.classList.add('btnAcao')
	btnExcluir.innerHTML = '<i class="fa fa-trash"></i>'
	btnExcluir.setAttribute('onclick', 'excluir('+tarefa.id+')')

	div.appendChild(btnEditar)
	div.appendChild(btnExcluir)

	li.appendChild(span)
	li.appendChild(div)

	return li
}

// função editar / excluir tarefas

function editar(idTarefa) {
	let editar = 
}

function excluir(idTarefa) {
	let confirmacao = window.confirm('Tem certeza que deseja excluir?')
	if(confirmacao) {
		let li = document.getElementById(''+idTarefa+ '')
		if(li) {
			listaTarefas.removeChild(li)
		}
	}
	
}


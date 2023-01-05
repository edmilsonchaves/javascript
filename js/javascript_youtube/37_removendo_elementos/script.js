/*

REMOVENDO ELEMENTOS

* Remover elementos também é muito fácio com Javascript.
* Temos como remover o elemento diretamente e também um elemento filho.
* Vamos ver na prática.


*/

 // removendo elemento filho.

 var container = document.querySelector(".container")

var p = document.querySelector(".container p")

container.removeChild(p)

// remover o elemento

let title = document.querySelector('#title')

title.remove()

// Simples, basta selecionar o elemento e usar remove()


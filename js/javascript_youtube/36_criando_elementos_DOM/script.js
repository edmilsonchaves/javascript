/*

CRIANDO ELEMENTOS COM DOM

* Outra possibilidade do JS e o DOM é criar elementos.

* O texto de um elemento é considerado um nó na árvore do DOM.

* Ou seja, temos que criar o texto do elemento também.

* Vamos ver na prática.


*/

let segundoParagrafo = document.createElement('p')

let texto = document.createTextNode('Esse é o segundo parágrafo!')

segundoParagrafo.appendChild(texto)

let body = document.querySelector('body')

body.appendChild(segundoParagrafo)


// inserindo em um container

var container = document.querySelector(".container")

var elemento = document.createElement("span")

elemento.appendChild(document.createTextNode('Texto do span'))

container.appendChild(elemento)





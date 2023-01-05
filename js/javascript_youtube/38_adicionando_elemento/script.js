/*

ADICIONANDO ELEMENTOS

* Podemos inserir um elemento dentro de outro, por exemplo um parágrafo em uma div.
* Isso é considerado como "acrescentar um filho" em JS.
* Vamos ver na prática.

*/

// criar elemento

let el = document.createElement('div')

el.classList = 'div-criada'

let container = document.querySelector('.container')

// inserindo elemento filho
container.appendChild(el)

// insertBefore - Insere antes

let el2 = document.createElement('div')

el2.classList = 'div-before'

let el3 = document.querySelector('.container .div-criada')

container.insertBefore(el2, el3)


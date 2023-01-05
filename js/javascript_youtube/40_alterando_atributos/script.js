/*

TROCANDO ELEMENTOS

* Podemos também trocar um elemento no DOM.
* Ou seja, subistituir uma tag por outra e de modo bem fácil.
* Vamos ver na prática.

*/


// criando elemento
let el = document.createElement('h3')

el.appendChild(document.createTextNode('Texto do h3'))


// selecionar elemento para substituir

let title = document.querySelector("#title")

// selecionar o pai do elemento

// let body = document.querySelector("body")

let pai = title.parentNode

// alterando os elementos

pai.replaceChild(el, title)






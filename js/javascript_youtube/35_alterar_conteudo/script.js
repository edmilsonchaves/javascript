/*

Alterar conteúdo do elemento (textContent e innerHTML)

* Podemos alterar o texto de qualquer elemento de forma

fácil com o Javascript.

* Posteriormente podemos atrelar essa ação com algum evento;

* Vamos ver na prática;

*/

// Primeira etapa, selecionar o elemento.

//innerHTML

let title = document.querySelector('#title')

console.log(title)

title.innerHTML = 'Esse texto foi alterado dinamicamento por Javascript'

// textContent - mais utilizado, recomendado, performático.

let paragrafo = document.querySelector('.paragrafo')

console.log(paragrafo)

paragrafo.textContent = "Esse parágrafo foi alterado por JS."



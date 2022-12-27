/*

OUTRAS FORMAS DE ACESSAR O DOM

* Com a evolução da linguagem foram criados dois seletores que 
acabam com toda a complexidade desta ação.

*querySelector e querySelectorAll;

* Com estes podemos acessar os elementos baseados em regras de CSS;

* Vamos ver na prática;

*/

let h1 = document.querySelector('h1');

console.log(h1)

let paragrafo = document.querySelector('#paragrafo')

console.log(paragrafo)

let span = document.querySelector('#paragrafo span')

console.log(span)




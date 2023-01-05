/*

ALTERANDO CSS COM JS

    * É muito comum também alterar CSS com JS.
    * As regras CSS ficam de forma Inline.
    * Substituindo as maiorias das outras regras criadas.
    * Vamos ver na prática.

*/

let title = document.querySelector("#title");

let body = document.querySelector('body')

title.style.color = 'dodgerblue'
title.style.backgroundColor = 'lightgreen'

body.style.backgroundColor = 'lightblue'

// adicionando várias regras de uma vez

let paragrafo = document.querySelector('.paragrafo')

paragrafo.style.cssText = "color: red; background-color: yellow; font-size: 3rem"








/*

ALTERANDO ATRIBUTOS

    * Podemos alterar os atributos via JS e DOM.
    * Por exemplo: alterar o atributo alt de uma imagem.
    * Ou seja, até um src de uma imagem.
    * Todos os atributos podem ser alterados via JS!.
    * Vamos ver na prática.

*/

// adicionando uma classe

let title = document.querySelector('#title')

title.setAttribute("class", "add-atributo")

console.log(title)

// adicionando ID no botão

let btn = document.querySelector('button')

btn.setAttribute('id', 'btn')

btn.setAttribute("disabled", "disabled")

// remover atributo

btn.removeAttribute('id')


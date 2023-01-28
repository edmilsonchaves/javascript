/*

O QUE SÃO EVENTOS?

    * Por meio do Javascript podemos mapear algumas ações dos usuários, que chamamos de eventos.
    * Como: movimentar o mouse, click, mouse entrando e saindo de um elemento, carregamento de uma página etc.
    * E então criar comportamento interessante como: animação de menu abrindo e fechando.

EVENTOS ONLOAD

    * O onload é ativado ao carregar a página.
    * Podemos depois desse evento, realizar alguma ação no nosso projeto.
    * Vamos ver na prática
*/


window.onload = function () {

    console.log('carregou o DOM')
}

console.log('carregou o JS')

let title = document.querySelector('#title');

console.log(title)
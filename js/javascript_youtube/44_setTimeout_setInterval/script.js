/*

SETTIMEOUT SETINTERVAL

    * Podemos com estas funções criar ações para nosso
software que executam depois de um tempo ou de tempos em tempos.

    * Um dos argumentos destas funções é callback function;

    * Vamos ver na prática;

*/

// setTimeout

console.log("Antes do setTimeout!")

setTimeout(function () {
    console.log('Testando o setTimeout!');

}, 5000); /* 5 segundos */

console.log("Depois do setTimeout!")

// setInterval

setInterval(function () {
    
    console.log("Testando setInterval!");
}, 3000);

// Dessa forma fica em looping aguardando o comando de parada. 



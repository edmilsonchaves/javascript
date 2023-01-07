/*

CALLBACK FUNCTIONS

    * A função de callback é um recurso muito interessante e também
amplamente utilizado em JS;

    * Permite executar uma função depois de uma determinada ação.
    * Conceito fundamental para entender a parte assíncrona do JS
    * Vamos ver na prática.
*/

function soma(a, b) {
    let operador = a + b;
    console.log(operador);
}

function subtracao(a, b) {
    let operador = a - b;
    console.log(operador);
}

function multiplicar(a, b) {
    let operador = a * b;
    console.log(operador);
}

function divisao(a, b) {
    let operador = a / b;
    console.log(operador);
}
/*
soma(5, 3);
subtracao(10, 3);
multiplicar(5, 5);
divisao(10, 2);
*/
/* usando callback */

function exibir(num) {
    console.log(`A operação resultou em ${num}!`);
}

function sm(a, b, callback) {
    let operador = a + b;
    callback(operador);
}

sm(5, 3, exibir)

function mult(a, b, cb) {
    let operador = a * b;
    cb(operador);
}

mult(8, 5, exibir);


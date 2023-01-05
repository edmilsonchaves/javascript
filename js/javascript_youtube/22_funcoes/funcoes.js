
/*      FUNÇÕES

    * Funções são blocos de códigos reutilizáveis;
    * Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
    * A função precisa ser invocada para ser executada.
    * Vamos ver na prática.

*/


function primeiraFuncao() {

    console.log('Hello World das funções')
}

primeiraFuncao()

function dizerNome(nome) {

    console.log(`Olá ${nome}, tenha um bom dia!`)

}

dizerNome('Arthur')

function soma(a, b) {
    
    return a + b 
}

var resultado = soma(5, 4)
console.log(resultado)

/*      FUNÇÕES

    * Funções são blocos de códigos reutilizáveis;
    * Ou seja, evitamos a repetição da lógica de um programa em diversas partes do código;
    * A função precisa ser invocada para ser executada.
    * Vamos ver na prática.

*/

function primeiraFuncao() {
    console.log('Hello World das Funções')
}

primeiraFuncao()

function dizerNome(nome) {
    console.log(`Hello ${nome}, have a nice day!`)
}

dizerNome('Edmilson')

function soma(a, b) {
    
    return a + b
}


let resultado = soma(5, 10)

console.log(resultado)


/*
TIPOS DE DADOS: OBJETOS

* Funciona como um array, associativo de outras linguagens.
* Podemos criar propriedades com chave e valor.
* A idéia é guardar um conjunto de valores para utilizar posteriormente.
* Vamos ver na prática.

*/

var obj = {
    nome: 'Edmilson',
    idade: 35,
    profissão: 'Programador'
}

console.log(obj)

console.log(obj.nome.toUpperCase())
console.log(`Meu nome é ${obj.nome}, tenho ${obj.idade} anos.\nA minha profissão é ${obj.profissão}.`)



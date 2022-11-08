
var pessoa = {
    nome: 'John Doe',
    idade: 35
}

var contato = {
    telefone: 11999885525,
    email: 'johndoe@javascript.com'
}

// Utilizando spread operator para realizar uma cópia do objeto.

// var copia = {...pessoa}
// copia.idade = 99

// console.log(pessoa)
// console.log(copia)

// Podemos adicionar outra propriedade com spread operator

var copia = {...pessoa, cidade: 'Rio de Janeiro',...contato}

console.log(pessoa)
console.log(copia)

// funciona tanto para objetos e arrays

var nomes = ['arthur', 'carlos', 'ana', 'leticia']


var copia_nomes = [...nomes]
copia_nomes.push('joão')


console.log(nomes)
console.log(copia_nomes)





















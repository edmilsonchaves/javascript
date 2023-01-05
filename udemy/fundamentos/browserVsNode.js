
let pessoa = {nome: 'Arthur', falar: function () { return `Eu sou o ${this.nome}!`}}

//podemos usar template string ${}

console.log(pessoa.nome)
console.log(pessoa.falar())

let a = 3

console.log(this.a)

// O Node retorna undefined utilizando o this.




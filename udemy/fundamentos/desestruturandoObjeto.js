
var aluno = {
    nome: 'leidimara',
    matricula: 321521,
    idade: 36,
    cidade: 'Conceição do Piauí',
    telefone: 11999995255
}

console.log(aluno)

// Conseguimos pegar uma propriedade específica criando uma variável.

var {matricula} = aluno

console.log(matricula)

// Funciona também para Array
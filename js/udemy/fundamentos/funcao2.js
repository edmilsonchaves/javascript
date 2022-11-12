 
 // Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(5, 2) // 7

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 2)) // 7

// retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

// redução menor da arrow function
const msg = a => console.log(a)

msg('JavaScript')



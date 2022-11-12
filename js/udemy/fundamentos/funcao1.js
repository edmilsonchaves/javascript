
// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(20, 50)


// Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 7))

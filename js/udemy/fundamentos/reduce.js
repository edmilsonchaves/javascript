
let numeros = [10, 12, 55, 100]

function somarValores(total, numeros) {
    return total + numeros
}

console.log(numeros.reduce(somarValores, 0))


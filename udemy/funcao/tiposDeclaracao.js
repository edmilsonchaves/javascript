// Utilzando function declaration podemos usar no começo do código, antes de declarar a mesma.

// As demais, irá apresentar erro pois ainda não foi declarada.

// function declaration
function soma(x, y) {
    return x + y
}
console.log(soma(10, 9))

// function expression
let multiplicar = function (a, b) {
    return a * b
}
console.log(multiplicar(10, 2))

// named function expression
const sub = function sub(x, y) {
    return x - y
}
console.log(sub(5, 3))


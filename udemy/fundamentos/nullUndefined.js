
// Dessa forma chamamos de atribuição por referencia. 
// Tanto variaável a e b são alteradas.

const a = {name: 'teste'}

console.log(a)

const b = a

console.log(b)

b.name = 'Hello World!'

console.log(b)

// Trabalhando com tipos primitivos será feito uma cópia por valor.

let c = 3

let d = c

console.log(c, d)
// 3 3

d++

let valor // variável não inicializada
console.log(valor)
//undefined

valor = null // ausência de valor
console.log(valor)
// null







let numero = (7 / 0) 
console.log(numero)
//Infinity  - Qualquer número divido por zero não gera erro. "infinito"

let calc = ('10' / 2)
console.log(calc)
console.log(typeof calc) // tipo number
// 5  - Javascript faz análise da string e converte para um tipo númerico.

let msg = ("Show" * 2)
console.log(msg)
// NaN - Em algumas outras linguagem retornaria ShowShow, JS não interpreta dessa forma.

let n = (0.1 + 0.7) // gera uma imprecisão
console.log(n)
// 0.7999999999999999
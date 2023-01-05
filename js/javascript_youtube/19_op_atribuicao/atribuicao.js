
/*

    OPERADORES DE ATRIBUIÇÃO

* Temos algumas formas de atribuir um valor para uma variável;
* As mais utilizadas são: +=, -=, *=. /=
* Basicamente é uma forma resumida da operação: x = x + y
* Em loops também é comum utilizar: ++ ou --

- Vamos ver na prática.

*/

var x = 1
var y = 2

// soma

console.log(`A soma de ${x} e ${y} é:`, + (x += y)) // utilzando operador de atbribuição +=

// subtração

console.log(`A subtração de ${x} e ${y} é: ` + (x -= y))

// multiplicação 

console.log(`A multiplicação de ${x} e ${y} é: ` + (x *= y))

// divisão 
console.log(`A divisão de ${x} e ${y} é: ` + (x /= y))


// loops


while (x <= 100) {

    console.log(`O valor de X é: ${x}`)

    x *= 2


}

console.log(x)


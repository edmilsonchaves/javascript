
/**
* MÉTODOS ARRAYS PARTE 2
 
* Podemos resgatar um conjunto de elementos com os métodos;
* Identificar o índice de um elemento específico e muito mais;

*/

// splice - Podemos adicioanar um elemento no meio de um array.

let numbers = [1,5,32,55,756,121]
 
console.log(numbers)

numbers.splice(2, 0, 10)

console.log(numbers)

numbers.splice(4, 1)

console.log(numbers)


//indexOf

console.log(`O número 121 esta no índice ${numbers.indexOf(121)}`)

//join - Podemos transformar um array em string.

let msg = ["O", "sucesso", "é", "a", "soma", "de", "pequenos", "esforços", "dia", "após", "dia"]

console.log(msg)

let msg2 = msg.join(" ")

console.log(msg2)
console.log(msg2.split(" "))

//reverse - Podemos inverter um array com esse método.

console.log(msg.reverse())



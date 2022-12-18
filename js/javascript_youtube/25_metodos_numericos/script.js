/*
MÉTODOS NUMÉRICOS

* O objeto "Number" pai dos numéricos, contêm métodos muitos 
uteis para trabalhar com os números em JS.

* A maioria dos tipos de dados de um objeto PAI,
como: String, Object, Array.

* Vamos ver na prática.

*/

// parseFloat 10.0

console.log(parseFloat('12.999'))
console.log(Number.parseFloat('12.999'))


// parseInt 

console.log(parseInt('10'))
console.log(parseInt('10.5'))

// toFixed - Usado para escolher quantas casas após a vírgula.

console.log(23.55555.toFixed(1))


// isNaN - Validar se o valor é númerico ou não.

console.log(isNaN('texto'))
console.log(isNaN(12))

// MAX_VALUE e MIN_VALUE

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

// Infinity
console.log(1.7976931348623157e+308)


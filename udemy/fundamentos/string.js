
const time = 'corinthians'

console.log(time.charAt(3))
console.log(time.charAt(0))
console.log(time.charCodeAt(0))
console.log(time.indexOf('h'))

console.log(time.substring(1)) // inicia do índice até o fim da string
console.log(time.substring(1, 7)) // podemos informar o ínicio e fim. 


console.log('O melhor time do mundo é o '.concat(time.toUpperCase()).concat("!"))
console.log(`O melhor time do mundo é o ${time.toUpperCase()}!`)
console.log(time.replace('h', 'H'))

console.log('edmilson, arthur, leidimara'.split(','))

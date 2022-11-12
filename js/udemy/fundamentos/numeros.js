
const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

console.log(Number.isInteger(peso1)) 
// O valor 1.0 é reconhecido como inteiro, ignora o zero.
//Após o ponto/virgula for diferente de zero, retorna "false" Ambos exemplos.
console.log(Number.isInteger(peso2))


const avaliacao1 = 8.758
const avaliacao2 = 7.452

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2)) //em binário
// 111.11100011001010000100011011111111010100010011110011



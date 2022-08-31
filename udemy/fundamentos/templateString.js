
const nome = 'arthur'
const concatenacao = 'Olá ' + nome
const template = `
    Olá
    ${nome.toUpperCase()}`

console.log(concatenacao, template)

// fazendo uma simplesfunção com arrow function

let up = texto => texto.toUpperCase()

console.log(`Ei mano... ${up('javascript é foda')}!`)



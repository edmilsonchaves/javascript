
/**
 * MÉTODOS DE STRING PARTE 2
 *
 * Os métodos string também pode auxiliar na sua modificação;
 * Podemos por exemplo deixar a fonte caixa alta ou baixa com JS;
 * Vamos ver na prática; 
 */


// toLowerCase e toUpperCase

let frase = 'O Arthur é maravilhoso igual o pai!'

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

// trim

let nome = '            Arthur           ';

console.log(nome)

let nomeTrim = nome.trim()

console.log(nomeTrim)


// split

let array = frase.split(" ")

console.log(array)

let tags = "javascript, php, python, nodeJs, html, css"

let tag = tags.split(", ")

console.log(tag)

console.log(tag[2])

// lastIndexOf

let frase2 = 'O sucesso é a soma de pequenos esforços repetidos dia após dia'

console.log(frase2.indexOf('dia'))

console.log(frase2.lastIndexOf('dia'))



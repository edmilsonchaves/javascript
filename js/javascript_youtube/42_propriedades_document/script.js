/*

PROPRIEDADES DE DOCUMENT

 * O objeto document não tem somente métodos;
 * Podemos retirar várias informações importantes das suas propriedades também.
 * Vamos ver na prática;

*/


 // propriedades document
 
console.log(document.body)
console.log(document.head)
console.log(document.links)

console.log(document.links[1])

document.links[0].textContent = "Instagram"

document.links[1].textContent = "Javascript"

console.log(document.URL)

console.log(document.title)






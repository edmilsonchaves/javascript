var lista = ['Laranja', 'Pera', 'Maçã', 'Limão', 'Banana']

var listaUL = document.createElement('ul')

var body = document.getElementsByTagName('body')

body[0].appendChild(listaUL)

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0])

for (var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li')

    var textoLi = document.createTextNode(lista[i])

    liFor.appendChild(textoLi)

    listaNoBody[0].appendChild(liFor)
}
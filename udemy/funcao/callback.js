
const fabricantes = ['Mercedes', 'BMW', 'Audi', 'Ferrari']

function imprimir(nome, indice) {
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir)


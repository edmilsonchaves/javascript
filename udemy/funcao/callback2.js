const notas = [7.2, 5.5, 8.1, 10, 2.4, 4.3, 7.5]

// sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callaback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(`Abaixo de 7: ${notasBaixas2}`)

// callback usando arrow
// const notasAltas = notas.filter(n => n > 6)

const notasAltas = notas.filter((notas) => {
    return notas > 6
})

console.log(`Notas acima de 7: ${notasAltas}`)


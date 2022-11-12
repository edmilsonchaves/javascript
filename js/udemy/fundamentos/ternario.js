
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

let n = resultado(6)


if (n == 'Aprovado') {
    console.log(`Parabéns, você foi, ${resultado(10)}!`)

} else {
    console.log(`Péssimo, você foi, ${resultado(6)}!`)
}



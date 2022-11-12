
// logicos JS  - logicals operators

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwase xor | trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário - unary operator

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}


}


console.log(compras(true, true))




// carne = 400 gr por pessoa + de 6 horas - 650 gr
// cerveja - 1200 ml por pessoa  + 6 horas - 2000 ml 
// refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")
let resultado = document.querySelector(".resultado")


function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value
    
    let qtdTotalCarne = carnePP(duracao) * adultos + ((carnePP(duracao) * criancas) / 2)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    let qtdTotalBebida = bebidaPP(duracao) * adultos + ((bebidaPP(duracao) * criancas) / 2)



    resultado.innerHTML = `<p>Quantidade de carne: ${qtdTotalCarne / 1000} kg</p>`
    resultado.innerHTML += `<p>Quantidade de cerveja: ${Math.ceil(qtdTotalCerveja / 355)} latas</p>`
    resultado.innerHTML += `<p>Quantidade de (refri/água): ${qtdTotalBebida  / 1000} L</p>`

    

}


function carnePP(duracao) {
    if(duracao >=6) {
        return 650

    }else {
        return 400
    }
    
}


function cervejaPP (duracao) {
    if(duracao >= 6){
        return 2000

    }else {
        return 1200
    }

}

function bebidaPP (duracao) {
   if (duracao >= 6) {
       return 1500
   
    } else{
        return 1000
    }
}

function limpar() {

    let adultos = inputAdultos.value=''
    let criancas = inputCrianca.value='' 
    let duracao = inputDuracao.value=''

    resultado.innerHTML = ''
 
}
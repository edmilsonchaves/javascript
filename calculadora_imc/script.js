

let calcular = document.querySelector(".calcular")


function imc(){
    let altura = document.querySelector(".altura").value
    let peso = document.querySelector(".peso").value
    let resultado = document.querySelector(".resultado")
  
    if(altura != '' && peso != ''){
        
        let valorIMC = (peso / (altura * altura)).toFixed(1)
        

        let classificacao = ''

        if (valorIMC < 18.5){
            classificacao = "(Abaixo do peso)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        } else if (valorIMC <= 24.9){
            classificacao = "(Peso normal)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        
        } else if (valorIMC <= 29.9){
            classificacao = "(Sobrepeso)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        
        }else if (valorIMC <= 34.9) {
            classificacao = "(Obesidade Grau I)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        
        } else if (valorIMC <= 39.9) {
            classificacao = "(Obesidade Grau II)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        
        } else if (valorIMC >= 40) {
            classificacao = "(Obesidade mórbida Grau III)"
            resultado.textContent = `Seu IMC é ${valorIMC} ${classificacao}`
        }

    }else {
        resultado.textContent = "Preencha todos os campos"
    }
}

calcular.addEventListener("click", imc)
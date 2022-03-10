function idade () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var msg = document.querySelector('div#msg')
    var idade = ano - Number(fano.value)
    
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('ERRO! Verifique os dados e tente novamente.')
    } else {
        var fsexo = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked ) {
            
            if(idade >=0 && idade < 10) {
                genero = 'Menino'
                img.setAttribute('src', 'imagens/crianca-m.png')
                

            } else if (idade < 30) {
                genero = 'Garoto Adolescente'
                img.setAttribute('src','imagens/adolescente-m.png')

            } else if (idade < 60) {
                genero = 'Homem Adulto'
                img.setAttribute('src', 'imagens/adulto-m.png')

            } else if (idade > 60) {
                genero = 'Homem Idoso'
                img.setAttribute('src', 'imagens/idoso-m.png')
            }

        } else if (fsexo[1].checked) {
            genero = 'Mulher'
                if(idade >=0 && idade < 10) {
                    genero = 'Menina'
                    img.setAttribute('src', 'imagens/crianca-f.png')

                } else if (idade < 30) {
                    genero = 'Garota Adolescente'
                    img.setAttribute('src', 'imagens/adolescente-f.png')

                } else if (idade < 60) {
                    genero = 'Mulher Adulta'
                    img.setAtribute('src','imagens/adulto-f.png')

                } else if (idade > 60) {
                    genero = 'Mulher Idosa'
                    img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }    
        
    }
    msg.style.textAlign = 'center'
    msg.innerHTML = `Detectamos ${genero} de ${idade} anos!`
    msg.appendChild(img)

}

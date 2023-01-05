
function carregar() {
    var agora = new Date()
    var hora = agora.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src ="imagens/foto-manha.png"
        document.body.style.backgroundColor = '#E3C57A';
        
    } else if (hora < 19) {
        //boa tarde!
        img.src ="imagens/foto-tarde.png"
        document.body.style.backgroundColor = '#D08C52';
        document.header.style.color="black"
    }else {
        //foto noite
        img.src ="imagens/foto-noite.png"
        document.body.style.backgroundColor = '#1B282F'
            
        
    }

}
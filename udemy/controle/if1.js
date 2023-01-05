// usando unidades de controle IF

function nota(n) {
    if(n >= 7) {
        console.log('Parabéns, você passou!')
    }
}

nota(7)
nota(3)
/*
Note que a como não definimos um estrura de controle caso o valor for menor do que 7

Podemos ignorar o {} irá somente reconhecer a primeira linha de comando.
*/

function seForVerdade (valor) {
    if(valor) {
        console.log('É VERDADE', + valor)
    }
}


seForVerdade(10)


Number.prototype.nota = function (inicio, fim) {
	return this >= inicio && this <= fim
}


const resultado = function (n) {
	if (n.nota(7, 10)) {
		console.log('APROVADO!')
	} else if (n.nota(4, 6)) {
		console.log('RECUPERAÇÃO!')
	} else if (n.nota(0, 3)) {
		console.log('REPROVADO!')
	} else {
		console.log('VALOR INVÁLIDO!')
	}
}

/*
Podemos usar a estrutura de repetição IF | ELSE IF | ELSE 

Realizado testes da nota mais baixa para mais alta

 não apresentou falha no laço de repetição.
*/
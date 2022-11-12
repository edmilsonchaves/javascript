/*
Utilizamos WHILE quando não sabemos quantas repetições 

será necessário. 

EX: Enquanto o usuário não digitar o -1 ficará em looping. 

Sempre será executado enquanto o valor for VERDADEIRO.

*/


function aleatorio(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}


let number = 0

while ( number != -1) {
	valor = aleatorio(-1, 10)
	console.log(`O valor aleatório é ${valor}!`)
	break
}

console.log('até a próxima')
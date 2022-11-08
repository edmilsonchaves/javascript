function aleatorio(min, max) {
	const valor = Math.random() * (max - min) + min
	return Math.floor(valor)
}


let number = 0

do {
	valor = aleatorio(-1, 10)
	console.log(`O valor aleatório é ${valor}!`)
while ( number != -1) 
}

console.log('até a próxima')

function aleatorio([min = 0, max = 50]) {
	
	if (min > max) [min, max] = [max, min]

	const valor = Math.random() * (max - min) - min

	return Math.floor(valor)
}

 

let notas = [7.5, 10, 3.6, 5.5, 7.8, 9.5]

for (nota in notas){
	console.log(`Posição ${nota} = ${notas[nota]}`)
}


let i = 0
while (i < notas.length) {
	console.log(`i = ${i} / ${notas[i]}`)
	i++
}



let pessoas = {
	nome: 'edmilson',
	sobrenome: 'chaves',
	idade: 35,
	curso: 'JavaScript'
}


for (let i in pessoas) {
	console.log('i')


}
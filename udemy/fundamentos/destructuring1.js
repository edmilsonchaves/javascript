
// recurso do ES2015 

// Desestruturando usando um objeto.

const pessoa = {
	nome: 'Aline',
	idade: 19,
	endereco: {
		rua: 'Margaridas',
		numero: 1200
	}
}

// As chaves {} representa o operador de desestruturação. 

const {nome, idade} = pessoa	
console.log(nome, idade)
/*
> nome
'Aline'
> idade
19
> pessoa
{
  nome: 'Aline',
  idade: 19,
  endereco: { rua: 'Margaridas', numero: 1200 }
*/

// Podemos usar outra variável se preferir dessa forma

const {nome: n, idade: i} = pessoa
console.log(n, i)

// Caso retirar um atributo que não exista no objeto

const {sobrenome, bemHumorada = true} = pessoa


// Para acessarmos um atributo dentro de outro objeto

const {endereco: {rua, numero, cep}} = pessoa



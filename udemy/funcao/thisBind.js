
const pessoa = {
	saudacao : 'Good morning!',
	falar() {
		console.log(this.saudacao)
	}
}

pessoa.falar()

// Recomendado usar THIS com arrow function.

//  Usando o bind() descrevemos quem será o THIS

// BIND não altera o valor.

const falarPessoa = pessoa.falar.bind(pessoa)

falarPessoa()


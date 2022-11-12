
class Pessoa {
	construtor(nome) {
		this.nome = nome
	}

	falar() {
		console.log(`Meu nome é ${this.nome}`)
	}
}

const p1 = new Pessoa('Arthur')


const people = msg => {
	return {
		falar: () => console.log(`Meu nome é ${msg}`)
	}
}



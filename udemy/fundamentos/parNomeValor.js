

/*
Podemos utilizar o mesmo nome de variável caso estiver em blocos diferentes. 
Não irá interferir na utilização. 

Podemos usar até mesmo nome de váriais chave/valor na criação

*/

const cliente = {
    nome: 'Alexandre',
    sobrenome: 'souza',
    idade: 37,
    cidade: 'São Paulo',
    endereço: {
        logradouro: 'Avenida João Ramalho',
        numero: 1234,
        complemento: 'Apartamento 23, bloco 20',

    }
}

console.log(cliente.endereço)
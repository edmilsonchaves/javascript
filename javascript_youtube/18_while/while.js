
/*

    ESTRUTURA WHILE

* O while é uma estrutura de repetição mais simples do Javascript;
* A idéia é que se repita algo até atingir tal condição;
* while > enquanto;

- Vamos ver na prática

*/

// podemos usar laço while para percorrer o array. 

var pessoas = ['leidimara', 'arthur', 'edmilson', 'joao', 'maria', 'jose']

i = 0

while (i < pessoas.length) {
    console.log(pessoas[i])

    i++
}

// Usando while para percorrer uma variável

let language = 'javascript'

j = 0

while ( j < language.length) {
    
    console.log(language[j])

    j++
}

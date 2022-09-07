
/*VARIÁVEIS DEFINIDAS COM VAR

- ESCOPO GLOBAL
- ESCOPO DE FUNÇÃO

DECLARAÇÕES DE VARIÁVEIS USANDO LET

- ESCOPO GLOBAL 
- ESCOPO DE FUNÇÃO
- ESCOPO DE BLOCO

*/

// USANDO LET

let numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}

console.log('Fora =', numero)
/*
Dentro = 2
Fora = 1
*/

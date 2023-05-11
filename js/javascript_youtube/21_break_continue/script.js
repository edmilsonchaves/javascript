
/*
    BREAK E CONTINUE

* Com o break podemos encerrar uma instrução.
* Com o continue podemos pular uma instrução.
* Utilizados na maioria das vezes em loops.

*/

for (let num = 10; num > 0; num--) {

    console.log(num)

    if (num === 5) {
        break      // sai do loop
    }
}

console.log('Deu o break')

var x = 10 

while (x <= 100) {
    
    console.log(x)

    x+= 10

    if (x === 50) {
        console.log('CONTINUE')
        continue
    }
}

console.log('FIM')

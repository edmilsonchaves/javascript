
/**
 * MÉTODOS ARRAYS
 
 * Os arrays também possui métodos;
 * Facilitando nossa vidas para: adicionar e remover elementos,
 resgatar apenas uma parte de um array e etc;
 */


 // length - Podemos checar o tamanho do array com essa propriedade.

 let arr = [1, 2, 5, 10, 33, 585]

 console.log(arr.length)

// push - Podemos adicionar elementos com essa propriedade.

arr.push(1000)
arr.push('podemos adicionar qualquer elemento')
console.log(arr)

// pop - para remover o  último elemento de um array

arr.pop()

console.log(arr)

// unshift - para adicionar o elemento no início do array

arr.unshift(21)

console.log(arr)

// shift - para remover um elemento do início do array similar ao pop()

arr.shift()

console.log(arr)


// acessar o último elemento de um array

console.log(arr[arr.length -1])

//isArray - podemos usar para verificar se é um array.

console.log(Array.isArray(5))

let valor = Array.isArray(arr)

if (valor == true) {
    
    console.log('É um array')

} else {
    console.log('Não é um array')
}




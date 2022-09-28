
// Função em JS First-Class Object (Citizens)
// Higher-order function


// criar função de forma literal

function fun1() {
	//função pode retornar valor ou não mesmo que seja undefined.
}

// Armazenar em uma variável
const fun2 = function () { }  // funçao anonina

// Armazenar em um Array
 const array = [function () {return a + b }, fun1, fun2]
 console.log(array[0](2, 3))

 //Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Olá, tudo bem'}
console.log(obj.falar())


// Armazenar uma função como param

function run(fun) {
	fun()
}

run(function() {console.log('Hello World!')})


//Uma função ela pode retornar / conter uma função

function soma(a, b) {
	return function (c) {
		console.log9(a + b + c)
	}
}

// soma(2, 3)(5)

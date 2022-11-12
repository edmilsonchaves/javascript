
let compararComThis = function(param) {
	console.log(this === param)
}

compararComThis(global)
// true

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global) // false
compararComThis(obj) // true

// Como utilizamos o bind, apontamos o this para fora do escopo global.

let thisArrow = (param) => {console.log(this === param)}

thisArrow(global) // true

const obj2 = {}
thisArrow = thisArrow.bind(obj2)
thisArrow(global) // true
thisArrow(obj2) // false



/**
 * TUDO É OBJETO
 * 
 * Como você pode perceber muito tipos de dados tem métodos e propriedades.
 * Podemos criar também nossos objetos com propriedades e métodos para auxiliar nos nossos programas.
 * Vamos ver na prática.
 */

let people = {
    name: 'Mara',
    age: 37,
    country: 'Brazil',
    speak: function(){
        console.log('Hello, how is everything?')
    }
}

console.log(people.name)
console.log(people.age)
console.log(people.country)

people.speak()

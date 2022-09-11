 
// Utilizando THIS e BIND

let dog = {
    sound: "Au Au",
    speak: function () {
        console.log(this.sound)
    }
}


let cat = {
    sound: "Miau",
    speak: function (){
        console.log(this.sound)
    }
}

dog.speak()
cat.speak()


// Utilizando BIND, praticamente referenciamos ao programa o método ou variável a ser executada.



/*
EVENTO KEYDOWN

    * O evento keydown é ativado quando uma tecla é pressionada;
    * Podemos também atrelar o evento keyup para quando uma tecla volta a posição normal;
    * Vamos ver na prática;


// keydown

document.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        console.log("Apertou o Enter")
    }
});



// keyup

document.addEventListener("keyup", function (e) {

    if (e.key === "Enter") {
        console.log('Soltou o Enter')
    }

});

*/

document.addEventListener("keyup", (event) =>{

    console.log(event.key);
})




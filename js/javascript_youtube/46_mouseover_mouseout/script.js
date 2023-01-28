
// EVENTOS USANDO MOUSEOVER E MOUSEOUT


let title = document.getElementById('title');
let hide = document.querySelector(".hide");

title.addEventListener('mouseover', (event) => {

    title.style.backgroundColor = "#48cae4";
    title.style.padding = "2rem";
    title.style.fontFamily = "lato";
    title.style.textAlign = "center";
    title.style.borderRadius = "10px";
    title.style.color = "#FFF";
    title.style.cursor = "pointer";
    hide.style.display = "block";

    
})

title.addEventListener("mouseout", (event) => {

    title.style.backgroundColor = "#00b4d8";
    title.style.padding = "2rem";
    title.style.fontFamily = "lato";
    title.style.textAlign = "center";
    title.style.borderRadius = "10px";
    title.style.color = "#333"
    hide.style.display = "none";
})


// efeito mouse

let passeMouse = document.querySelector(".mouse");
let oculto = document.querySelector(".oculto");

passeMouse.addEventListener("mouseover", function () {

    passeMouse.classList.add("oculto");
    oculto.classList.remove("oculto");
    oculto.style.color = "#077BFF";
    oculto.style.fontWeight = "bolder";
    oculto.style.fontSize = "6rem";
    oculto.style.textAlign = "center";


})

passeMouse.addEventListener("mouseout", function () {

    passeMouse.classList.remove("oculto");
    oculto.classList.add("oculto");
})



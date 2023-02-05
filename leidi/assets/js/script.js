
const menuBtn = document.querySelector("#menuBtn");
const menuBtn2 = document.querySelector(".menuBtn2");
const options = document.querySelector("#options");
const listMenu = document.querySelector(".list-menu");
const openMenu= document.querySelector(".open-menu");


// eventos
menuBtn.addEventListener("click", function () {
    showMenu();
});

menuBtn2.addEventListener("click", function () {
    showMenu();
});

listMenu.addEventListener("mouseout", function () {
    console.log('mouse esta fora do menu!')
});


// mostrar o menu
function showMenu() {

    options.classList.toggle('hide');
    menuBtn.classList.toggle('hide');
    menuBtn2.classList.toggle('hide');
};



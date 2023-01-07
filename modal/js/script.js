
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector('#close-modal');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});



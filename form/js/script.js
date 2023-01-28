
const form = document.querySelector('#form');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const inputJob = document.querySelector('#job');
const inputMessage = document.querySelector('#message');


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // validar campo do nome
    if (inputName.value === "") {
        alert('Campo NOME vazio!');
        return;
    }

    // validar campo e-mail
    if (inputEmail.value === "" || !isEmailValid(inputEmail.value)) {
        alert("campo EMAIL vazio ou inválido!");
        return;
    }

    // validar campo senha
    if (!passwordIsValid(inputPassword.value, 8)) {
        alert("Por favor, insira uma senha mínimo 8 dígitos!");
        return;
    }

    // validar campo trabalho
    if (inputJob.value === "") {
        alert("Selecione uma opção 'Está buscando emprego?'");
        return;
    }

    // validar campo mensagem
    if (inputMessage.value === "") {
        alert("Campo MENSAGEM vazio, preencha por favor! ");
        return;
    }

} )

// Função que valida e-mail
function isEmailValid(email) {
    // criar uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/

    );

    if (emailRegex.test(email)) {
        return true;
    }
    return false;

}

// Função  para validar senha
function passwordIsValid (password, miniDigits) {

    if (password >= miniDigits) {
        return true;
    }
    return false;

}
 

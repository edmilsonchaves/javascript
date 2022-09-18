
// criar as variáveis
const squares = document.querySelectorAll(".square");

let isCircleTurn = false;

const handleClick = (e) => {
    // colocar a marca ( X ou O)
    const square = e.target
    const classToAdd = isCircleTurn ? 'o' : 'x';

    square.classList.add(classToAdd);
    // Verificar por vitória
    // Verificar por empate
    // Mudar o simbolo
}

// Esse evento será realizado somente uma vez;
for(const square of squares) {
    square.addEventListener('click', handleClick, {once: true})
}




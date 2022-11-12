
function novoAluno(nome, idade) {
    return {nome, idade}
}

let alunos = [
    novoAluno('josé', 34),
    novoAluno('maria', 44),
    novoAluno('marcia', 18),
    novoAluno('joao', 17)
]

// for (let aluno of alunos) {
//     if (aluno.idade < 30 ){
//         console.log(aluno.nome)
        
//     }
// }


function temMenosDe30 (aluno) {
    return aluno.idade < 30
}

let alunosComMenosDe30 = alunos.filter(temMenosDe30)
    
console.log(alunosComMenosDe30)

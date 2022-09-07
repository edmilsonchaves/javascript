/*
HOISTING - 
Possui o significado de elevação "IÇAR" puxar para cima. 

Ocorre por exemplo, quando executamos uma linha de comando sem ter declarado a variável antes. 
Em Javascript, consegue executar quando declaramos uma variável usando VAR.

Não apresenta erro, somente fica como indefinida, conforme exemplo abaixo:
*/

console.log('a = ', a)
var a = 2
console.log('a = ', a)
/*
a =  undefined
a =  2
Nesse exemplo acontece HOISTING, Javascript interpreta a variável mas não seu valor retornando UNDEFINED.

O efeito HOISTING, usando variável LET não ocorre. Retorna erro na execução como não definido.

*/







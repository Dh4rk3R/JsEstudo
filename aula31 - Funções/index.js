const nomes = ['kaio', 'Maria']
console.log(nomes.map((nomes) => nomes.length))

//- Tipo ArrowFunction
// const raiz = (n) => {
//     return n**0.5;
// };
// console.log(raiz(4))

//   E isso tbem é, quando se tem somente uma linha
//   de comando e tbem um unico parametro 

// const raiz = n => n ** 0.5;
// console.log(raiz(4))


//- Exemplo de tipo anonima de função
// const raiz = function (n){
//     return n**0.5;
// };
// console.log(raiz(4))


//- Mais tipos de declarações
// function soma(x = 1, y = 2){
//     const result = x + y;
//     return result;
// }
// console.log(soma(4, 4))


//- Exemplo de função para Soma
// function soma(x, y){         
//     const result = x + y;
//     return result;
// }
// console.log(soma(4, 4))


//- Exemplo básico de Array com return
// function saudacao(nome){     
//     return `Bom dia ${nome}`;
// }
// const variavel = saudacao('kaio');
// console.log(variavel)
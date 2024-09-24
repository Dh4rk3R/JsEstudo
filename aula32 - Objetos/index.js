const pessoa1 = {
nome: 'Kaio',
sobrenome: 'Maia',
idade: 26,

    fala(){
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade(){
        this.idade++
    }

}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

//             Exemplo de Objeto
// function criaPessoa(nome, sobrenome, idade){
//     return{
//         nome:nome,
//         sobrenome:sobrenome,
//         idade:idade
//     };
// }
// const pessoa1 = criaPessoa('Kaio', 'Maia', 26)
// console.log(pessoa1)
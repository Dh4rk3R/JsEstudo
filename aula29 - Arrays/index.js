//               0       1       2       3
const alunos = ['kaio', 'Maia', 'kadu', 'Meireles']

console.log(typeof alunos)
console.log(alunos instanceof Array)


// console.log(typeof alunos) - Vai retornar como 'Object'
// console.log(alunos instanceof Array) - Vai validar se é de fato um Array

//console.log(alunos.slice(0,3)) - Fatiar o array, trazendo o valor que eu quiser entre as variaveis, seja usando
    //positivo ou negativo, definindo se vai da direta pra esquerda eliminando ou contrário.
    //EX: console.log(alunos.slice(0,-3))

//console.log(alunos[50]) - Encontra valor que mesmo que não existe irá ser exibido

//delete alunos[1] - Remove uma variavel localizada
    // const alunos = ['kaio', 'Maia', 'kadu', 'Meireles']
    // delete alunos[1]
    // console.log(alunos)

//alunos.shift() - Remove um valor do array do começo
    // const alunos = ['kaio', 'Maia', 'kadu', 'Meireles']

    // const remove = alunos.shift()
    // alunos.shift()
    // console.log(alunos)
    // console.log(remove)

//alunos.pop() - Remove um valor do array do final
    // const alunos = ['kaio', 'Maia', 'kadu', 'Meireles']

    // const remove = alunos.pop()
    // alunos.pop()
    // console.log(alunos)
    // console.log(remove)

//alunos.unshift('Pantanal') - Adiciona o valor dentro do array no começo

//alunos.push('Meireles') - Adiciona o valor dentro do array no final

//alunos[alunos.length] = 'kadu' - Adiciona o valor dentro do array no final

//console.log(alunos.length) - Exibe o tamando do Array

//console.log(alunos[0]) - Exibe o que for localizado pelo que for indicado dentro do colchete

//console.log(alunos) - Exibe todos os nomes

const n = 10;

// Se (n >= 0 && n <= 5) ocorrer, faça isso {código}
// Se não faça isso {código}

if(n >= 0 && n <= 5){
    console.log('Sim, o número está entre o 0 e 5')
}else if (n >= 6 && n <= 8){
    console.log('O número está entre o 6 e 8')
}else if (1 === 1){
    console.log('LITERAL') //considerado como verdadeiro logo ela quebra todas as demais condições.
}else if (n >= 9 && n <= 11){
    console.log('O número está entre o 9 e 11')//verdadeiro
}else{
    console.log('O número não está entre o 0 e 11')
}

<<<<<<< HEAD
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
=======
const numero = 10;

if (numero <= 10) { // Verdadeira
     console.log('0 número é menor que 10.');
    }

if (numero >= 0 && numero <= 5) {
    console.log('0 número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('0 número está entre 6 e 8.');
} else if (1 === 1) { // Verdadeira
    console.log('LITERAL');
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
    console.log('0 número está entre 9 e 11.');
} else {
    console.log('0 número não está entre 0 e 11.');
}
    
 console.log('... Aqui vai o resto do código.');
>>>>>>> main

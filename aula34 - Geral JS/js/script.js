const pessoas = [];

function meuUniver(){
const form = document.querySelector('.form'); 
const resultado = document.querySelector('.resultado');
  
    function recebeEventForm (evento){
       evento.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
       
        pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });

       console.log(pessoas);
       resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
     
    }form.addEventListener('submit', recebeEventForm)
}meuUniver();  


// forma de criar um observador dentro da função 1
    // form.onsubmit = function(evento){
    //     event.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado')
    // };

// forma de criar um observador dentro da função 2
    // let contador = 1;
    // function recebeEventForm (){
    //     event.preventDefault();
    //     console.log(`Form não enviado ${contador }`)
    //     contador++;

    // }
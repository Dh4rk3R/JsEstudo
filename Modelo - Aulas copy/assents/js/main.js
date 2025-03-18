const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('Evento predefinido')
    setResult('Olá Mundo')
});


function setResult(msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = `msg da doidinha` que achou `sairia dessa facel
    `;


}
const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura)
    if (!peso){
        setResult('Peso Inválido!', false);
        return;
    }

    if (!altura){
        setResult('Altura Inválida!', false);
        return;
    }

    console.log('cheguei aqui...');

    const imc = getImc(peso, altura);

});

function getImc () {


}

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResult(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    

    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

}
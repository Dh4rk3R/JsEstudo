const numero = Number(prompt ('Digite um número: '))
/*const sins = numero.replace(/,/g ,'.')*/
const numeroTitulo = document.getElementById('numero-titulo');
const nomeTexto = document.getElementById('text');

numeroTitulo.innerHTML = numero;
nomeTexto.innerHTML = `<p> A raiz quadrada é ${numero ** 0.5}</p>`;
nomeTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
nomeTexto.innerHTML += `<p> É NaN: ${Number.isNaN(numero)}</p>`;
nomeTexto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}</p>`;
nomeTexto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}</p>`;
nomeTexto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}</p>`;

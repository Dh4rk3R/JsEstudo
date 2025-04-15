// Aula referente ao estudo de operações ternárias
// (condicao) ? 'Valor Verdadeiro' : ' Valor para falso'

const pontuacaoUser = 1000;
const nivelUser = pontuacaoUser >= 1000 ? "User VIP" : "User Normal";

const corUser = 'bluw';
const corStand = corUser || 'Preton';

console.log(nivelUser, corStand);

// Esse metodo aprimora na construção de código no sentido de blocos IF


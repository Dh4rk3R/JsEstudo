/*
Kaio Maia tem 26 anos, pesa 78 kg
tem 1.76 de altura e seu IMC e de 'tanto'
Kaio Maia nasceu em 1998
*/


const nome = 'Kaio'
const sobrenome = 'Maia'
const idade = 26
const peso = 78
const altura = 1.76

let imc
let ano = new Date()
let deNasc = ano.getFullYear()

imc = (peso/(altura**2))

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa
${peso}kg e tem ${altura} de altura e seu IMC é ${imc}...
${nome} ${sobrenome} nasceu em ${(deNasc - idade)}`)

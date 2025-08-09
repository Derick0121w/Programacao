/*e) Faça um algoritmo em que o usuário digite dois números. A partir daí, crie um
vetor que receba todos os números no intervalo entre esses dois números
digitados. O tamanho do vetor deve ser dinâmico (de acordo com o tamanho
do intervalo). Por fim, imprima na tela todos os números presentes no vetor.*/
const prompt = require('prompt-sync')()
let n1 = +prompt('Digite um nº: ')
let n2 = +prompt('Digite um nº maior que o 1º: ')
const vetor = []
for(let i = 1; i < (n2-n1); i++){
    vetor.push(i+n1)
}
console.log(vetor)
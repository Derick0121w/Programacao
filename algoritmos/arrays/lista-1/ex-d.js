const prompt = require('prompt-sync')()
/*d) Faça um algoritmo que receba do usuário quatro números e coloque-os em um
vetor. Em seguida, peça ao usuário que insira qual das posições do vetor ele
quer ver. Por fim, mostre o número alocado nessa posição.*/

let vetor = []
const n1 = prompt('Digite um nº: ')
const n2 = prompt('Digite um nº: ')
const n3 = prompt('Digite um nº: ')
const n4 = prompt('Digite um nº: ')
vetor.push(n1, n2, n3, n4)
const qual = prompt('Qual índice do vetor queres ver? ')
console.log(vetor[qual])
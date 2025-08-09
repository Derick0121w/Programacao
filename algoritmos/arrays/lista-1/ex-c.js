const prompt = require('prompt-sync')()
/*c) Crie um algoritmo que receba do usuário três números e coloque-os em um
vetor. Em seguida, mostre apenas o primeiro.*/
let vetor = []
const n1 = prompt('Digite um nº')
const n2 = prompt('Digite um nº')
const n3 = prompt('Digite um nº')
vetor.push(n1, n2, n3)
console.log(vetor[0])
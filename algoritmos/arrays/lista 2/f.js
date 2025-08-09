const prompt = require('prompt-sync')()
/*f) Construa um algoritmo que peça, dado um array com N números, peça ao
usuário um número e mostre na tela quantas vezes ele está presente no array. */

vetor = [9,8,456,6,5,10,9,8,7,6,5,10,8,9087, 1]
let cont = 0
const n = +prompt('Digite um número: ')
for(let i of vetor){
    if(i == n){
        cont++
    }
}
console.log(`Esse Número que você digitou aparace ${cont} vezes na array secreta do Derick. `)
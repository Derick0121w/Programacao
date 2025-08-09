/*d) Desenvolva um algoritmo que, por meio de repetições, apresente o número
mais alto presente em um array.*/
const vetor1 = [9, 8, 456, 6, 5, 10]
let maior = vetor1[0]
for(let i = 0; i<vetor1.length; i++){
    if(vetor1[i]>= maior){
        maior = vetor1[i]
    }
}
console.log(maior)
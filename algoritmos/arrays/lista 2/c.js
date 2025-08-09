/*c) Faça um algoritmo que, dado um vetor com N posições, crie um vetor igual,
mas ao contrário.*/
const vetor1 = [9, 8, 7, 6, 5, 10]
let vetor2 = []
for(let i = 0; i< vetor1.length; i++){
    vetor2.push(vetor1[vetor1.length - i-1])
}
console.log(vetor2)
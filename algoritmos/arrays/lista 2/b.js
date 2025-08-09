/*b) Crie um algoritmo que, dado um vetor com um número N de posições, transfira
todos esses números para ou outro vetor de mesmo tamanho. Cada novo
números deve ser o dobro do antigo.*/
const vetor1 = [9, 8, 7, 6, 5, 10]
let vetor2 = []
for(let i = 0; i < vetor1.length; i++){
    vetor2.push(vetor1[i]*2)
}
console.log(vetor2)
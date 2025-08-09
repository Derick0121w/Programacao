const prompt = require('prompt-sync')()
/*f) Faça um algoritmo que possua um vetor x que armazene 6 números inteiros. O
programa deve executar os seguintes passos:
a. Atribua os seguintes valores a esse vetor: 1, 0, 5, -2, -5, 7;
b. Armazene em uma variável inteira (simples) a soma entre os valores das
posições x[0], x[1] e x[5] do vetor e mostre na tela essa soma;
c. Modifique o vetor na posição 4, atribuindo a essa posição o valor 100.
d. Mostre na tela cada valor do vetor x, um em cada linha.*/
const vetor = [1, 0, 5, -2, -5, 7]
let inteira = vetor[0] + vetor[1] + vetor[5]
console.log(inteira)
vetor[3] = 100
for(let i = 0; i< vetor.length; i++){
    console.log(`A ${i+1}ª posição do vetor tem o valor de ${vetor[i]}`)
}

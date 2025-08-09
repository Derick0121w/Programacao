const prompt = require('prompt-sync')()
/* a) Crie um algoritmo que utilize três repetições:
a. Primeiro, uma repetição que peça ao usuário para digitar 5 números.
Guarde-os todos em um vetor.

b. Depois, faça uma repetição que mostre todos os valores presentes nesse
vetor, um em cada linha.
c. Por fim, faça uma repetição semelhante à anterior, mas os valores
apresentados na tela devem ser de trás pra frente.*/
const vetor = []
for(let i = 0; i< 5; i++){
    vetor.push(+prompt('Digite o '+(i+1)+'º Número: '))
}
for(let i = 0; i< 5; i++){
    console.log(vetor[i])
}
console.log()
for(let i = 4; i>= 0; i--){
    console.log(vetor[i])
}

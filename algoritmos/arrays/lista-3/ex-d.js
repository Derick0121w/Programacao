/*d) Desenvolva um algoritmo que, dado um vetor, identifique o maior e o menor
número presente nesse vetor.*/
const vetor = [21, 34, 6376854, 341, 23, 12, -24, 1

    
]
let soma = 0
let menor = vetor[0]
for(let i of vetor){
    if(i >= soma){soma = i}
    if(i <= menor){menor = i}
}
console.log(`O maior é ${soma}, e o menor ${menor}`)
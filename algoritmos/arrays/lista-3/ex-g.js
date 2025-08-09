/*g) Desenvolva um algoritmo que, dado um vetor, realize a comutação entre o
primeiro e o último valor.*/
const vetor = [21, 'vsc', 34, 'fvs', 6376854, 'rafael', 'jaques', 341, 23]
let y = 'easy'
y = vetor[0]
vetor[0] = vetor[vetor.length-1]
vetor[vetor.length-1] = y
console.log(vetor)
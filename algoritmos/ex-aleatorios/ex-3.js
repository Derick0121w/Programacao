const prompt = require('prompt-sync')()
const cores = ["azul", "vermelho", "verde", "azul", "azul", "amarelo"];
const qual = prompt('Qual cor quer descobrir quantas vezes aparece? ').toLowerCase()
console.log(cores)
let vez = 0
for(let c of cores){
    if(c == qual){
        vez++
    }
}
console.log('Aparece ')
console.log(vez)
console.log('vezes')
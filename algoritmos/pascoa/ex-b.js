const prompt = require('prompt-sync')()
let vezes = Number(prompt('Quantas vezes você quer rodar o programa? '))
while(vezes--!=0){
let n = Number(prompt('Digite um Nº: '))
let x = n+1
let y = 1
while(x-- != 2){
    process.stdout.write(`${x}X`)
    y = y*x
}
process.stdout.write(`${x} = ${y}\n`)
}
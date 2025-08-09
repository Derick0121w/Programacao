const prompt = require('prompt-sync')()
let n = Number(prompt('Digite um Nº: '))
let x = 0
while(x++ != 10){
    console.log(`${n} X ${x} = ${n*x}`)
}
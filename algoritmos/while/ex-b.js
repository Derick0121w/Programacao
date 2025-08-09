const prompt = require('prompt-sync')()
let a = Number(prompt('Digite um nº: '))
while(a++ != 50){
    process.stdout.write(`${a} `)
}
const prompt = require('prompt-sync')()
let n = 0
let y = 0
while(n++ != 8){
y += Number(prompt('Digite um nº: '))
}
console.log('A soma dos 8 números solicitados é igual a '+y)
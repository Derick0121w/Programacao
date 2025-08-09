const prompt = require('prompt-sync')()
let a = 0
let med = 0
let n = 0
let f = 0
while(a >= 0){
    f = a
    a = Number(prompt('Digite um nº: '))
    med += f
    n++
}
console.log(`A média dos números digitados é ${(med/n).toFixed(2)}`)
const prompt = require('prompt-sync')()
let n = 7
let a = Number(prompt('Digite um Nº: '))
let ma = a
let mn = a
while(n-- != 0){
    a = Number(prompt('Digite um Nº: '))
    if(a > ma){
        ma = a}
    if(a <= mn){
        mn = a
    }
}

console.log(`O maior nº digitado é ${ma}, e o menor é ${mn}`)
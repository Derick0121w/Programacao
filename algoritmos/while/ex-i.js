const prompt = require('prompt-sync')()
let n = 8
let a = 0
let ma = 0
while(n-- != 0){
    a = Number(prompt('Digite um Nº: '))
    if(a > ma){
        ma = a
    }
}

console.log(`O maior nº digitado é ${ma}`)

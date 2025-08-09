const prompt = require('prompt-sync')()
let random = Math.floor(Math.random() * (5 - 1 + 1)) + 1
let input = 0
while(true){
    input = Number(prompt('Adivinhe o ovo premiado: (nºs de 1 a 5): '))
    if(input == random){
        console.log('Parabéns, você acertou!!!')
        break
    }
    else if(input>random){
        console.log('O número premiado é menor que o digitado')
    }
    else{console.log('O número premiado é maior que o digitado')}
}
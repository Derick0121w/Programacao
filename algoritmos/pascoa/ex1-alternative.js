const p = require('prompt-sync')()
const c = 2
let contador = 0
let cenouras = Number(p('Quantas cenouras deseja comprar? '))
let desconto= 0
let desconto_total=0
while(contador++<cenouras){
    if(desconto<50){
       desconto+=5
    }
    desconto_total+=(desconto/100)*c
    console.log(`O desconto na ${contador}ª cenoura é de ${desconto}% (R$${(desconto/100*c).toFixed(2)})`)
}
console.log(`O desconto total foi de R$${desconto_total.toFixed(2)}`)

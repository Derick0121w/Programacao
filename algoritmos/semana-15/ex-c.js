const prompt = require('prompt-sync')()
/*c) Crie um simulador de caixa eletrônico. Permita que o usuário realize operações como
saque, depósito e consulta de saldo. Deve haver um menu que mostre ao usuário as
opções (sacar, depositar, saldo, sair).*/
let oq = 0
let saque = 0
let deposito = 0
let saldo = 0
while(oq != 'sair'){
console.log(' _____________________________________________________________________')
console.log('|                  Digite uma opção (letra minúsculas)                |')
console.log('|                                                                     |')
console.log('|    sacar          Depositar           Saldo            Sair         |')
console.log('|_____________________________________________________________________|')
oq = prompt().toLowerCase()
switch(oq){
    case 'sacar':
        saque = Number(prompt('Quanto quer sacar? '))
        if(saldo < saque){
            console.log('Saldo insuficiente! ')
            break
        }else{
            saldo -= saque
        }
        break
    case 'depositar':
        deposito = Number(prompt('Quanto deseja Depositar? '))
        if(deposito > 0){
            saldo = saldo + deposito} 
        else{
            console.log('quer depositar um valor negativo filha da mãe?  VOU CHAMAR A POLÍCIA SEU LADRÃO!!!!!!!!!!!!!')
        }
        break
    case 'saldo':
        console.log(`Seu saldo é de R$ ${saldo}`)
        break
    }

}

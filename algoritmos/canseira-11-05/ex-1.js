const prompt = require('prompt-sync')()
let oq=0
let saldo=0
let saque=0
let dep=0
do{
    console.log('Escolha uma opção:\n1 - Verificar Saldo\n2 - Depositar\n3 - Sacar\n4 - Sair\n')
    oq = Number(prompt())
    switch(oq){
        case 1:
            console.log(`Seu saldo é de R$${saldo}`)
            break
        case 2:
            dep = Number(prompt('Quanto quer depositar? '))
            if(dep<=0){
                console.log('Erro! ')
            }
            else{
                saldo += dep
            }
            break
        case 3:
            saque = Number(prompt('Quanto deseja sacar? '))
            if(saque > saldo){
                console.log('Saldo insuficiente!\n')
            }
            else{
                saldo -= saque
            }
            break
        case 4:
            console.log('Adeus, volte sempre!!')
            break
        default:
            console.log('Error, digite uma opção válida!!! ')
            break
        }
}while(oq != 4)
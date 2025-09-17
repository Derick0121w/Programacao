const prompt = require('prompt-sync')()

const lista_de_compras = []
let oq = null
do {
    console.log('+=================================+\n+ ALGORITMO PARA LISTA DE COMPRAS +\n+=================================+')

    if(lista_de_compras.length == 0) console.log('você ainda não possui produtos na lista\n');
    else {
        console.log('+++ Seus Produtos:')
        for(let i in lista_de_compras){
        i = Number(i)
        console.log(`${i+1}: ${lista_de_compras[i]}`)}
    }

    console.log('O que deseja fazer? \n1 - Adicionar\n2 - Remover\n3 - Sair')
    oq = +prompt('Sua opção: ')
    switch(oq){
        case 1:
            lista_de_compras.push(prompt('O que vai Adicionar? '))
            break
        case 2:
            const remover = +prompt('Qual item você quer remover?(digite o Nº) ')
            for(let i in lista_de_compras){
                i = Number(i)
                if(i+1 === remover){lista_de_compras.splice(i, 1)}
            }
            break
        case 3:
            console.log('Desligando app')
            break
        default:
            console.log('Digite uma opção válida!')
            break
    }
}while(oq != 3)
/*Exercício 4: Um restaurante precisa de uma lista para adicionar os pedidos dos clientes. Toda vez que um novo pedido for feito, adicione o nome do prato à lista de pedidos. Exiba a lista completa de pedidos após adicionar cinco pratos. (Função: push())*/

const prompt = require('prompt-sync')()

console.log('__________________ Iventário _________________')
const fazer = prompt('O que deseja fazer ? (1-adicionar item 2-usar item) ').toLocaleLowerCase()
console.log('______________________________________________')
const inventário = []

if(fazer === '1'){
    let quantos = +prompt('Quantos itens? ')
    for(let i = 0; i < quantos; i++){
        let item = prompt(`Qual foi o ${i+1}º item que achaste? `)
        const raro = prompt('Esse item é raro?(s ou n): ')
        raro === 's'? inventário.unshift(item): inventário.push(item)
    }
} else if(fazer == '2'){
    const qual = ('Qual item quer usar? ')
    inventário.includes(qual) ? console.log(`${qual} foi usado! `) && inventário.pop() : console.log('Esse item tu não tens meu caro player. ')

} else{
    console.log('Digite uma opção válida! ')
}

console.log(`Seu inventário está assim: \n${inventário}`)

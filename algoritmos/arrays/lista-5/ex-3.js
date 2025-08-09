/*Exercício 3: No mesmo jogo de RPG, o jogador encontra um item raro e quer colocá-lo como o primeiro item de seu inventário. Simule a adição desse item raro e exiba o inventário completo. (Função: unshift())*/

const prompt = require('prompt-sync')()

console.log('__________________ Iventário _________________')
const fazer = prompt('O que deseja fazer ? (1-adicionar item 2-usar item) ').toLocaleLowerCase()
console.log('______________________________________________')
const inventário = []

if(fazer === '1'){
    let quantos = +prompt('Quantos itens? ')
    for(let i = 0; i < quantos; i++){
        let item = prompt(`Qual foi o ${i}º item que achaste? `)
        const raro = prompt('Esse item é raro?(s ou n): ')
        raro === s? inventário.unshift(item): inventário.push(item)
    }
} else if(fazer == '2'){
    const qual = ('Qual item quer usar? ')
    inventário.includes(qual) ? console.log(`${qual} foi usado! `) && inventário.pop() : console.log('Esse item tu não tens meu caro player. ')

} else{
    console.log('Digite uma opção válida! ')
}

console.log(`Seu inventário está assim: \n${inventário}`)

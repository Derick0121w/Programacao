const prompt = require('prompt-sync')()
/*Exercício 2: No mesmo RPG, quando o jogador usa um item do inventário, ele deve ser removido do final da lista. Simule o uso de dois itens e exiba o inventário atualizado. (Função: pop())*/
console.log('__________________ Iventário _________________')
const fazer = prompt('O que deseja fazer ? (1-adicionar item 2-usar item) ').toLocaleLowerCase()
console.log('______________________________________________')
const inventário = []

if(fazer === '1'){
    let quantos = +prompt('Quantos itens? ')
    for(let i = 0; i < quantos; i++){
        let item = prompt(`Qual foi o ${i}º item que achaste? `)
        inventário.push(item)
    }
} else if(fazer == '2'){
    const qual = ('Qual item quer usar? ')
    inventário.includes(qual) ? console.log(`${qual} foi usado! `) && inventário.pop() : console.log('Esse item tu não tens meu caro player. ')

} else{
    console.log('Digite uma opção válida! ')
}

console.log(`Seu inventário está assim: \n${inventário}`)
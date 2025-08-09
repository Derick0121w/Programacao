const prompt = require('prompt-sync')()
/*Exercício 1: Crie um sistema para gerenciar o inventário de um RPG. Cada vez que o jogador encontrar um novo item, adicione-o ao inventário. Simule a adição de três itens diferentes e exiba o inventário final. (Função: push())*/
const fazer = prompt('Achou um Item ?(s ou n): ').toLocaleLowerCase()

if(fazer == 's'){
    let quantos = +prompt('Quantos items? ')
    const inventário = []
    for(let i = 0; i < quantos; i++){
        let item = prompt(`Qual foi o ${i}º item que achaste? `)
        inventário.push(item)
    }
} else if(fazer == 'n'){
    console.log('Prossiga o jogo. ')
 } else{
    console.log('Digite uma opção válida! ')
    }
console.log(`Seu inventário está assim: \n${inventário}`)



/*Exercício 5: Em uma fila de banco, o próximo cliente a ser atendido é o primeiro da fila. Crie uma simulação onde você retira o primeiro cliente e exibe a fila atualizada. Repita isso duas vezes. (Função: shift())*/
/*Exercício 6: Em um sistema de gerenciamento de turmas, um aluno pediu transferência e precisa ser removido da lista. Remova o aluno e exiba a lista atualizada. (Função: splice())*/
/*Exercício 7: Durante um campeonato, um jogador foi desclassificado e um novo jogador foi adicionado. Remova o jogador desclassificado e adicione o novo jogador à lista. (Função: splice())*/
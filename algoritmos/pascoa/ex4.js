/*a. Uma cesta de Páscoa tem uma capacidade máxima de 10 itens (ovos,
chocolates, bombons).

b. Crie um script que permita ao usuário adicionar itens à cesta, um por
vez.

c. Utilize um loop while que continue permitindo a adição de itens até
que a cesta esteja cheia (10 itens).

d. A cada item adicionado, exiba uma mensagem informando quantos
itens há na cesta atualmente.

e. Quando a cesta estiver cheia, exiba a mensagem "A cesta está cheia!". */
const prompt = require('prompt-sync')()
let contador = 0
let intens = 0
while(contador++<10){
    prompt('Adicione um item a cesta de Páscoa: ')
    console.log(`\nHá ${contador} item(s) na cesta`)
}
console.log('A cesta está cheia! ')
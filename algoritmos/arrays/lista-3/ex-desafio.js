const prompt = require('prompt-sync')()
/*d) [DESAFIO] Desenvolva um algoritmo que faça desenhos de triângulos na tela de
acordo com um número informado pelo usuário. Os desenhos devem ser feitos com o
caractere %. Solicita-se ao usuário um número de linhas e, a partir daí, desenha-se o
triângulo na tela.*/

const linhas = +prompt('Quantas linhas de  "%" você deseja? ')
for(let i = 0; i<= linhas; i++){
    process.stdout.write(' '.repeat(95 - i/2)) // Olha sor, PARA DAR CERTO  tem que deixar a aba de arquivos minimizada.toda a tela é ocupada pelo codigo ou no caso o terminal
    process.stdout.write('%'.repeat(i))
    process.stdout.write(' '.repeat(88.5 - i/2))
}
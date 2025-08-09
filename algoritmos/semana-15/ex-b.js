const prompt = require('prompt-sync')()
/*b) Crie um script que verifique se uma frase digitada pelo usuário é um palíndromo
(textos que são iguais quando lidos de frente pra trás e de trás pra frente). Para fins de
simplificação, imagine que o usuário não escreverá frases, apenas palavras.
Dica: para retornar um caractere de uma posição específica, utilize o método
charAt() indicando qual o número da posição (começando em zero). Por exemplo,
para pegar o segundo caractere de uma string, utilize:
nome_da_variavel.charAt(1).*/
const palavra = prompt('Digite uma palavra qualquer: ')
let count = 0
let tamanho = palavra.length - 1
let sim = 111
while(count <= tamanho/2 && sim == 111){
    if(palavra.charAt(count) == palavra.charAt(tamanho)){
        sim = 111
    } else{
        console.log('Não é palíndromo!! ')
        sim = 112
    }
    count++
    tamanho--
}
if(sim == 111){
    console.log('\n É um palindromo simmmm!!!!!!!!!!!!!!!')
}

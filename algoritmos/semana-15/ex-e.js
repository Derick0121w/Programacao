const prompt = require('prompt-sync')()
/*e) [DESAFIO DESAFIADOR] Crie um algoritmo que identifique se o CPF digitado
pelo usuário é válido. Este exercício envolve um pouco de pesquisa e destreza na
manipulação de strings e números. Você nunca mais olhará para um número de CPF
da mesma forma.*/
const CPF = prompt('Digite Seu CPF(somentes números): ')
let split = 0
let count = 10
let soma = 0
let dV = []
for(let i = 0; i< CPF.length - 2; i++, count--){
    split = Number(CPF.charAt(i)) * count
    soma += split
}

soma % 11 < 2? split = 0: split = 11 - soma%11
split == CPF.charAt(9) ? dV.push(split) : console.log('não é um CPF válido! ') && process.exit();

count = 11
soma = 0

for(let i = 0; i< CPF.length - 1; i++, count--){
    split = Number(CPF.charAt(i)) * count
    soma += split
}
soma % 11 < 2? split = 0: split = 11 - soma%11
split == CPF.charAt(10) ? console.log('É um CPF válido! '): console.log('não é um CPF válido! ')

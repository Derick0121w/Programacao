/*a. Você tem uma paleta de 5 cores para pintar os ovos de Páscoa:
vermelho, azul, amarelo, verde e rosa.

b. Crie um script que pergunte ao usuário quantos ovos ele deseja
pintar.

c. Utilize um loop while para simular a pintura de cada ovo. Em cada
loop, pergunte ao usuário qual cor ele deseja pintar.

d. Ao final, apresente quantos ovos foram pintados de cada cor.*/

const prompt = require('prompt-sync')()
let ovos = Number(prompt('Quantos ovos deseja pintar? '))
let contador =1
let lista=0
let vermelho=0
let azul=0
let amarelo=0
let verde=0
let rosa=0

while(ovos--!=-1){
    lista=prompt(`Qual cor deseja usar no ${contador}º ovo?(vermelho, azul, amarelo, verde ou rosa) `)
    switch(lista){
        case 'vermelho':
            vermelho++
            break
        case 'azul':
            azul++
            break
        case 'amarelo':
            amarelo++
            break
        case 'verde':
            verde++
            break
        case 'rosa':
            rosa++
            break
        default:
            console.log('\nDigite uma cor válida!(vermelho, azul, amarelo, verde ou rosa) ')
            ovos++
            continue
    }
    contador++
    ovos--
}
console.log('\nResumo da pintura:')
console.log(`Vermelho: ${vermelho} ovo(s) pintado(s)`)
console.log(`Azul: ${azul} ovo(s) pintado(s)`)
console.log(`Amarelo: ${amarelo} ovo(s) pintado(s)`)
console.log(`Verde: ${verde} ovo(s) pintado(s)`)
console.log(`Rosa: ${rosa} ovo(s) pintado(s)`)

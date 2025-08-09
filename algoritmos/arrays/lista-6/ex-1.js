// 1. Um comerciante registrou todas as moedas que recebeu em um dia. Porém, ele quer saber quanto acumulou apenas com moedas de 1 real ou mais.
const moedas = [0.5, 1, 0.25, 2, 5, 0.1, 1];
let quanto = 0
for(let o of moedas){
    if(o === 1){
        quanto++
    }
}
console.log(`ele lucrou R$${quanto} apenas com moedas de um real.`)
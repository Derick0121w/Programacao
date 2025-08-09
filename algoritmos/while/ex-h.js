const prompt = require('prompt-sync')()
let n = 10
let a = 0
let m18 = 0
let m5 = 0
let med = 0
let ma = 0
while(n-- != 0){
    a = Number(prompt('Digite a idade da pessoa: '))
    med += a
    if(a> 18){
        m18++}
    else if(a<5){
            m5++
        }
    if(a > ma){
        ma = a
    }
}

console.log(`Tem ${m18} pessoas com mais de 18, ${m5} com menos de 5, A média de idades é ${med/10}, e a maior idade digitada é ${ma}`)
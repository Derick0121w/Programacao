const prompt = require('prompt-sync')()
const precoCenoura = 2
let descontoTotal = 0
let c = 1
const q = Number(prompt('Quantas cenouras você quer comprar? '))
while (c <= q) {
    let d = c * 5
    if (d > 50) {
        d = 50
    }
    let valorDesconto = precoCenoura * (d / 100)
    descontoTotal += valorDesconto
    console.log(`Cenoura ${c}: desconto de ${d}% (R$${valorDesconto.toFixed(2)})`)
    c++;
}
console.log(`\nDesconto total acumulado: R$${descontoTotal.toFixed(2)}`)
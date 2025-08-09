const vendas = [{ produto: "banana", valor: 5 }, { produto: "maçã", valor: 3 }, { produto: "banana", valor: 4 }, { produto: "maçã", valor: 6 }, {produto: "laranja", valor: 7}]
const valor = {}
for(let p of vendas){
    if(!valor[p.produto]){
        valor[p.produto] = 0
    }
    valor[p.produto] += p.valor
}
console.log(valor)
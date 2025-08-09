//14. Montar Ranking de Palavras Mais Frequentes:
const palavras = ["sol", "lua", "sol", "estrela", "lua", "lua"];
let Ranking = {}
for(let p of palavras){
    if(Ranking[p]){
        Ranking[p]++
    } else {
        Ranking[p] = 1
    }
}
Ranking = Object.entries(Ranking)
console.log(Ranking.sort((a, b) => b[1] - a[1]))
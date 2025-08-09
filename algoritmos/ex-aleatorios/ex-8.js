const palavras = ["amor", "alegria", "carro", "caminho", "barco", "bola", "avião"];
const dici = {}
for(let p of palavras){
    if(!dici[p[0]]){
        dici[p[0]] = []
    }
    dici[p[0]].push(p)
}
console.log(dici)
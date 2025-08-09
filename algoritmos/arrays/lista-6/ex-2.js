const itens = ["parafuso", "parafuso", "porca", "arruela", "porca"];
const itens2 = []
for(let i of itens){
if(!itens2.includes(i)){
    itens2.push(i)
}
}
console.log(itens2)
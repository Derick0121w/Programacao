const doacoes = [50, 200, 150, 80, 120, 90, 300]; // Filtrar > 100
const doacoes2 = []
for(i of doacoes){
    if(i > 100){
        doacoes2.push(i)
    }
}
console.log(doacoes2
)
//ou tbm da para usar filter
const filter = doacoes.filter(n => n > 100)
console.log(filter)
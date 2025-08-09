const temperaturas = [22, 24, 19, 27, 30, 21, 25, 23, 26, 20];
const maiores = []
let media = 0
for(let b of temperaturas){
    media += b/temperaturas.length
}
for(let b of temperaturas){
    if(b>media){
        maiores.push(b)
    }
}
console.log(maiores)
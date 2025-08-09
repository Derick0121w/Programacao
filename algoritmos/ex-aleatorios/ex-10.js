const temperaturas = [22, 30, 27, 20, 25, 28];
let med = 0
for(let i of temperaturas){
    med += i/temperaturas.length
}
console.log(temperaturas.filter(n => n < med))
console.log(temperaturas.filter(n => n > med))
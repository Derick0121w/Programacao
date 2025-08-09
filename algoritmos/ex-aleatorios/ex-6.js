const valores = [1, 2, 3, 4, 5, 6];
let som = 0
for (let element of valores) {
    if(element % 2 == 0){
        som += element
    }
}
console.log(som)
const valores = [10, 5, 8, 20, 15]
let maior = -Infinity
let segundoMaior = -Infinity
for (let n of valores) {
    if (n > maior) {
        segundoMaior = maior
        maior = n
    } else if (n > segundoMaior && n < maior) {
        segundoMaior = n
    }
}
console.log("Maior:", maior)
console.log("Segundo Maior:", segundoMaior)
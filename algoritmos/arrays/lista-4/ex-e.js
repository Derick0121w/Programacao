/*e) Crie um array com os números 100, 200 e 300. Remova o primeiro número e exiba o
array atualizado.*/
// unshift() – Adiciona um item ao início do array
const array = [100, 200, 300]
array.shift()
console.log(array)
console.log(array.unshift(100))
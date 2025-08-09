const numeros = [1, 2, 2, 3, 4, 3, 5];
const vistos = []
for(let i = 0; i< numeros.length; i++){
    if(!vistos.includes(numeros[i])){
        vistos.push(numeros[i])
    }
    else {
        numeros[i] = 'Duplicata'
    }
}
console.log(numeros)
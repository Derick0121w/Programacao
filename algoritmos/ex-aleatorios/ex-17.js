const numeros = [2, 4, 3, 6, 1, 5];
const alvo = 7;
// Resultado esperado: [[2, 5], [4, 3], [6, 1]]
function AcharPossibilidades(lista, alvo){
    const possibilidades = []
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista.length - i; j++){
            let objevo = alvo - lista[i]
            if(objevo == lista[j]){
                possibilidades.push([lista[i], lista[j]])
            }
        }
    }

return possibilidades;
}
console.log(AcharPossibilidades(numeros, alvo))

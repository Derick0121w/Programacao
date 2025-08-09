const entrada = ["a", "a", "b", "b", "b", "a", "c", "c", "a"];

function agruparSequenciasContiguas(arr) {
    const resultado = []
    let letraAtual = null
    let contagemAtual = 0

    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i]
        if (elemento === letraAtual) {
            contagemAtual++
        } else {
            if (letraAtual !== null) {
                resultado.push([letraAtual, contagemAtual])
            }
            letraAtual = elemento
            contagemAtual = 1
        }
    }

    if (letraAtual !== null) {
        resultado.push([letraAtual, contagemAtual])
    }
    return resultado
}
const resultadoFinal = agruparSequenciasContiguas(entrada)
console.log(resultadoFinal)
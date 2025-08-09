// 15. Detectar Palíndromos em Massa:
const palavras = ["radar", "sol", "osso", "ana", "carro", 'reviver', 'osso'];
const palindromos = {}
let contr = []
function isPalindromo(palavra){
    const PalavraContraria = palavra.split('').reverse().join('')
    return PalavraContraria === palavra
}
for(let palavra of palavras){
    if(isPalindromo(palavra)){
        if(palindromos[palavra]){
            palindromos[palavra]++
        } else{
            palindromos[palavra] = 1
        }
    }
}
    contr = []
console.log(palindromos)
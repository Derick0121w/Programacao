const palavras = ["sol", "maravilhoso", "vento", "cachorro","alegria"];
let maior = palavras[0].length
for(let i = 0; i< palavras.length - 1; i++){
    if(palavras[i].length > maior){
        maior = palavras[i]
    }
}
console.log(maior)
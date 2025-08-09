const letras = ["e", "r", " ", "a", "m", "o", "v", "a", " ", "i"];
const ordem = [4, 5, 6, 1, 3, 0, 2, 7, 8, 9];
const certo = []
for(let i = 0; i < letras.length; i++){
    certo.push(letras[ordem[i]])
}
console.log(certo.join(''))
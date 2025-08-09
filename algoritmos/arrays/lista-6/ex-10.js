const letras = [ "o", "t", "a", "o", "r", " ", "e", "n", "v", "s", "c", "l", "n","m", " ", "o", "a", "n"];
const ordem = [6, 7, 10, 0, 12, 1, 4, 2, 13, 3, 9, 5, 15, 14, 16, 11, 8, 15];
const certo = []
for(let i = 0; i< letras.length; i++){
    certo.push(letras[ordem[i]])
}
console.log(certo.join(''))
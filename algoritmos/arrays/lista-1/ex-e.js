const prompt = require('prompt-sync')()
/*e) Construa um algoritmo que receba três notas de um aluno e coloque-as em um
vetor. Em seguida, apresente a média dessas notas.*/
let soma = 0;
const vetor = [];
for (let i = 0; i < 3; i++) {
  const nota = +prompt(`Digite a nota ${i + 1}:`);
  vetor.push(nota);
  soma += nota; 
}
const media = soma / 3;
console.log("Notas do aluno: " + vetor.join(", ")); 
console.log("Média das notas: " + media.toFixed(2));
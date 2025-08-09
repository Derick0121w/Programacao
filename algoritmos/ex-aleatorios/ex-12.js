const prompt = require('prompt-sync')()
const pessoas = [{ nome: "Carlos", idade: 20 }, { nome: "Ana", idade: 22 }, { nome: "Bruna", idade:19 }];

for(let i = 0; i < pessoas.length - 1; i++){
    for(let j = 0; j < pessoas.length - 1; j++){
        if(pessoas[j].nome > pessoas[j + 1].nome){
            let t = pessoas[j]
            pessoas[j] = pessoas[j + 1]
            pessoas[j + 1] = t
        }
    }
}
console.log(pessoas)
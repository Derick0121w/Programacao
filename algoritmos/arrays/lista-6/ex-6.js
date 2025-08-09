const nomes = ["Ana", "João", "Ana", "Carlos", "João", "Maria"];
const n_repe = []
for(let b of nomes){
    if(!n_repe.includes(b)){
        n_repe.push(b)
    }
}
console.log(n_repe)
const prompt = require('prompt-sync')()
const alunos = ['Derick', 'David', 'Jaques', 'Laura', 'Eduardo']
console.log(alunos.join(', '))
const q = prompt('Quem quer sair do 1º info? ').toLocaleLowerCase()
if(alunos.includes(q)){
    let i = 0
    for(let a of alunos){
        if(a == q){
            alunos.splice(i, 1)
        }
        i++
    }
} else {console.log('\nesse aluno n existe ')}
console.log(alunos)
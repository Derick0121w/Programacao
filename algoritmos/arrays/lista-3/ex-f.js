const prompt = require('prompt-sync')()
/*f) Crie um algoritmo que possua um dado vetor com alguns nomes de pessoas.
Em seguida, o usuário deve digitar um nome e o programa deve dizer se o nome
está contido na lista.*/
const nomes = ['derick', 'assunta', 'jananina', 'neiva', 'margarete', 'lúisa', 'vitor', 'airton', 'gaybriel', 'jaques']
const chute = prompt('Digite um nome e eu irei lhe informar se ele está contido na lista de nomes do Derick: ').toLowerCase()
if(nomes.includes(chute)){
    console.log('Está contido na secret Array!')
} else {
    console.log('Não está na array secret')
}
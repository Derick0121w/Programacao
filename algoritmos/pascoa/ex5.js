const p= require('prompt-sync')()

/*a. Crie um script que permita ao usuário adicionar itens à sua lista de
presentes de Páscoa.

b. Utilize um loop while que continue pedindo para o usuário inserir um
item até que ele digite a palavra "fim".

c. Ao final, exiba todos os itens que foram adicionados à lista. */

let contador = 1
let itens=0
let itens2=''

while(contador++ < 3){
    itens = p('Adicione um item a lista de Presentes de Páscoa(para parar de adicionar itens, digite fim): ')
    if(itens == 'fim'){
        contador+=2
    }
    else{
        itens2+=itens
        itens2+=' ' }
    contador--
}
console.log(itens2)
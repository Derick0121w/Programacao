const prompt = require('prompt-sync')()
/*d) Faça um programa em JS que permita ao usuário criar uma lista de compras. Cada
iteração do loop mostra toda a lista e pede para a pessoa adicionar um novo item. Se
ela escrever 0, o programa mostra a lista e acaba.
Dica: você pode adicionar valores a uma string já existente somando a variável com
o texto adicional.*/
let compra = ''
let lista = ''
while(compra != '0'){
    compra = String(prompt('Lista de Compras; Digite sua nova encomenda: '))
    lista += compra + '; '
    console.log(lista)
}

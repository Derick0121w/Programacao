const prompt = require('prompt-sync')()
/*a) Implemente um algoritmo que peça ao usuário para digitar uma senha. A senha só
será aceita se tiver pelo menos 8 caracteres. Mostre mensagens informativas para
auxiliar o usuário a criar uma senha forte. Segurança em primeiro lugar!
Dica: para verificar a quantidade de caracteres em uma string, utilize:
nome_da_variavel.length.*/
let senha
do{
    senha = prompt('Digite sua nova senha: ')
    if(senha.length >= 8){
        console.log('senha aprovada! ')
    } else if(senha.length > 5){
        console.log('Sua senha que ser mais segura! mas falta pouco para ser boa o suficiente')
    } else if(senha.length > 3){
        console.log('Sua senha tem que ser muito maior para ser segura o suficiente! ')
    } else{
        console.log('Sua senha é horrível mano. Aumente o tamanho dela se não quiser ser hackeado!!!!! ')
    }
}while(senha.length < 8)

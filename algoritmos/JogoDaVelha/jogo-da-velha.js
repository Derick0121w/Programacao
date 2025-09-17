// Importa o módulo readline
const readline = require('readline');

// Configura o processo de entrada (stdin) para capturar teclas
readline.emitKeypressEvents(process.stdin);

// Garante que o processo de entrada possa ser lido
// sem a necessidade do usuário pressionar Enter
process.stdin.setRawMode(true);

// Cria o "ouvinte" de eventos para as teclas pressionadas
process.stdin.on('keypress', (str, key) => {
  // 'str' é a string do caractere (por exemplo, 'a', 'b', '1')
  // 'key' é um objeto com informações detalhadas da tecla
  
  // Se o usuário pressionar Ctrl + C, o programa é encerrado
  if (key.ctrl && key.name === 'c') {
    console.log('Saindo do programa...');
    process.exit();
  }

  // Exibe a tecla pressionada no console
  console.log(`Você pressionou a tecla: '${str}'`);
  console.log('Informações da tecla:', key);
});

console.log('Pressione qualquer tecla para ver o resultado. Pressione Ctrl + C para sair.');

/*let mesa = [
 [' ', ' ', ' '],
 [' ', ' ', ' '],
 [' ', ' ', ' ']
];
console.log(`
   |   |   
---|---|---
   |   |   
---|---|---
   |   |   
`
)
function exibirTabuleiro(){
    for(let linha of mesa){
        console.log(linha)
    }
}
exibirTabuleiro()
"
   |   |   
---|---|---
   |   |   
---|---|---
   |   |   
"
*/
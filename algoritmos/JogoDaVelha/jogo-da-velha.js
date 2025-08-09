// Importa o módulo readline para capturar teclas
const readline = require('readline');

// --- Configuração do Jogo ---
const tabuleiro = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
let jogadorAtual = "X";
let posicaoCursor = 0; // Posição inicial do cursor (índice do array)

// --- Funções do Jogo ---

// Função para exibir o tabuleiro no terminal
function exibirTabuleiro() {
  // Limpa o terminal para redesenhar o tabuleiro
  console.clear();

  let linhas = [];
  for (let i = 0; i < 9; i += 3) {
    let linha = "";
    for (let j = 0; j < 3; j++) {
      let posicao = i + j;
      let marcador = tabuleiro[posicao];

      // Adiciona o cursor (>) na posição atual
      if (posicao === posicaoCursor) {
        marcador = `> ${marcador} <`;
      } else {
        marcador = `  ${marcador}  `;
      }
      linha += `|${marcador}`;
    }
    linhas.push(linha + "|");
  }

  console.log("-------------------");
  console.log("Jogo da Velha");
  console.log("-------------------");
  console.log(linhas.join("\n-------------------\n"));
  console.log("-------------------");
  console.log(`Vez do jogador: ${jogadorAtual}`);
  console.log("Use as setas para mover, Enter para jogar. Ctrl+C para sair.");
}

// Lógica de manipulação de teclas
function handleKeypress(tecla) {
  // Converte a tecla para string
  const teclaString = String(tecla);

  switch (teclaString) {
    case '\u001b[A': // Seta para CIMA
      posicaoCursor = Math.max(0, posicaoCursor - 3);
      break;
    case '\u001b[B': // Seta para BAIXO
      posicaoCursor = Math.min(8, posicaoCursor + 3);
      break;
    case '\u001b[C': // Seta para DIREITA
      posicaoCursor = Math.min(8, posicaoCursor + 1);
      break;
    case '\u001b[D': // Seta para ESQUERDA
      posicaoCursor = Math.max(0, posicaoCursor - 1);
      break;
    case '\r': // Tecla ENTER (para fazer a jogada)
    case '\n':
      fazerJogada();
      break;
    case '\u0003': // Ctrl+C (para sair do programa)
      console.log('\nJogo encerrado.');
      process.exit();
  }
  exibirTabuleiro();
}

// Lógica para fazer a jogada
function fazerJogada() {
  // Verifica se a posição escolhida já está ocupada
  if (tabuleiro[posicaoCursor] !== "X" && tabuleiro[posicaoCursor] !== "O") {
    tabuleiro[posicaoCursor] = jogadorAtual;
    
    // Troca o jogador
    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
  } else {
    // Se a posição estiver ocupada, dá uma mensagem de erro temporária
    // (A próxima atualização do tabuleiro limpará a mensagem)
    console.log("Posição já ocupada! Tente novamente.");
  }
}

// --- Início do Jogo ---

// Inicia o modo raw do terminal para capturar teclas
process.stdin.setRawMode(true);
process.stdin.resume();

// Captura os eventos de pressionamento de tecla
process.stdin.on('data', handleKeypress);

// Exibe o tabuleiro inicial
exibirTabuleiro();
/*const p = require('prompt-sync')()
let mesa = [
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
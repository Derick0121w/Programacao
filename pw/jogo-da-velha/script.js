const buttons = document.getElementsByClassName('j')
const zerar = document.getElementById('zerar')
const reiniciar = document.getElementById('reiniciar')
const novo = document.getElementById('novo')
const placar = document.getElementById('placar')
const win = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8]]

novo.disabled = true

let count = 0
let vezes = 0
let pontos = [0, 0]

placar.innerText = `X: ${pontos[0]} | O: ${pontos[1]}`

function player() {
    return count % 2 === 0 ? 'X' : 'O'
}

function Vitoria() {
    for (let [a, b, c] of win) {
        if (
            buttons[a].innerText !== '' &&
            buttons[a].innerText === buttons[b].innerText &&
            buttons[a].innerText === buttons[c].innerText
        ) {
            const vencedor = buttons[a].innerText
            if (vencedor === 'X') {
                pontos[0]++
            } else {
                pontos[1]++
            }

            placar.innerText = `X: ${pontos[0]} | O: ${pontos[1]}`
            alert(`Jogador ${vencedor} venceu!`)

            for (let b of buttons) {
                b.disabled = true
            }

            reiniciar.disabled = true
            novo.disabled = false
            return;
        }
    }

//verifica empate
    if (vezes == 9) {
        alert('enpate!')
        reiniciar.disabled = true
        novo.disabled = false
    }
}
//quando alguém clicla no quadradinho do jogo da velha
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        buttons[i].innerText = player()
        buttons[i].disabled = true
        count++
        vezes++
        Vitoria()
    })
}

reiniciar.addEventListener('click', () => {
    for (let b of buttons) {
        b.disabled = false
        b.innerText = ''
    }
    vezes = 0
    novo.disabled = true
})

novo.addEventListener('click', () => {
    for (let btn of buttons) {
        btn.disabled = false
        btn.innerText = ''
    }
    vezes = 0
    reiniciar.disabled = false
    novo.disabled = true
})

zerar.addEventListener('click', () => {
    pontos = [0, 0]
    placar.innerText = `X: ${pontos[0]} | O: ${pontos[1]}`
})

/*
[0,4,8],
[2,4,6],
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8]

0  1  2
3  4  5
6  7  8
*/
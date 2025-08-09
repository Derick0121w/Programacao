const aumentar = document.getElementById('mais')
const diminuir = document.getElementById('menos')
const zerar = document.getElementById('zerar')
const display = document.getElementById('quadrado')
const alerta = document.getElementById('alerta')

let contador = 0

function verificar(){
    display.innerText = contador >= 0 && contador < 10 ?`0${contador}` : contador
    diminuir.disabled = contador === 0
    zerar.disabled = contador === 0
    aumentar.disabled = contador === 10
}
function aprovado(){
const aprovado = contador >= 7
alerta.innerText = aprovado? 'Aprovado': 'Reprovado'
alerta.classList.toggle('aprovado', aprovado)
alerta.classList.toggle('reprovado', !aprovado)}
verificar()
aprovado()
aumentar.addEventListener('click', ()=>{
    if(contador < 10){
        contador++
        verificar()
        aprovado()
    }
})
diminuir.addEventListener('click', ()=>{
    if(contador > 0){
        contador--
        verificar()
        aprovado()
    }
})
zerar.addEventListener('click', ()=>{
    if(contador != 0){
        contador = 0
        verificar()
        aprovado()
    }
})

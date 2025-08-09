const quadrado = document.getElementById('quadrado')
const diminuir = document.getElementById('diminuir')
const zerar = document.getElementById('zerar')
const aumentar = document.getElementById('aumentar')
const aviso = document.getElementById('aviso')

let contador = 0
quadrado.innerText = contador > 0 && contador < 10 ? `0${contador}`:contador
diminuir.disabled = contador === 0
zerar.disabled = contador === 0
aumentar.disabled = contador === 10

if (contador < 7) {
    aviso.classList.add('reprovado')
    aviso.classList.remove('aprovado')
    aviso.innerText = "Reprovado"
} else {
    aviso.classList.remove('reprovado')
    aviso.classList.add('aprovado')
    aviso.innerText = "Aprovado"
}

diminuir.addEventListener('click', function(){
    if (contador <= 0) return;
    contador--
    quadrado.innerText = contador > 0 && contador < 10 ? `0${contador}`:contador
    diminuir.disabled = contador === 0
    zerar.disabled = contador === 0
    aumentar.disabled = contador === 10

    if (contador < 7) {
        aviso.classList.add('reprovado')
        aviso.classList.remove('aprovado')
        aviso.innerText = "Reprovado"
    } else {
        aviso.classList.remove('reprovado')
        aviso.classList.add('aprovado')
        aviso.innerText = "Aprovado"
    }
})

zerar.addEventListener('click', function(){
    contador = 0
    quadrado.innerText = contador > 0 && contador < 10 ? `0${contador}`:contador
    diminuir.disabled = contador === 0
    zerar.disabled = contador === 0
    aumentar.disabled = contador === 10

    if (contador < 7) {
        aviso.classList.add('reprovado')
        aviso.classList.remove('aprovado')
        aviso.innerText = "Reprovado"
    } else {
        aviso.classList.remove('reprovado')
        aviso.classList.add('aprovado')
        aviso.innerText = "Aprovado"
    }
})

aumentar.addEventListener('click', function(){
    if (contador >= 10) return;
    contador++
    quadrado.innerText = contador > 0 && contador < 10 ? `0${contador}`:contador
    diminuir.disabled = contador === 0
    zerar.disabled = contador === 0
    aumentar.disabled = contador === 10

    if (contador < 7) {
        aviso.classList.add('reprovado')
        aviso.classList.remove('aprovado')
        aviso.innerText = "Reprovado"
    } else {
        aviso.classList.remove('reprovado')
        aviso.classList.add('aprovado')
        aviso.innerText = "Aprovado"
    }
})
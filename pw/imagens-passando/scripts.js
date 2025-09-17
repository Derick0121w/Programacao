const mark = document.getElementById("mark")
const back = document.getElementById('back')
const to_go = document.getElementById("to_go")
const imagem = document.getElementById("painel")

let contador = 0
let anterior = null
const adress_images = ['imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg', 'imgs/img4.jpg', 'imgs/img5.jpg']

// 1-criar função para atualizar uma imagem. 2-criar o sistema de 'points'. 3-criar o sistema de 'focu'.

function atualizar(){
    imagem.src = adress_images[contador]
}
function atualizar_point(){
    if (anterior){anterior.classList.remove("focu")}
    const pointi = document.getElementById(`point_${contador}`)
    pointi.classList.add("focu")
    anterior = pointi
}

atualizar()
to_go.addEventListener("click", ()=>{
    if(contador < adress_images.length - 1){
        contador++
    } else {contador = 0;}
    atualizar()
    atualizar_point()
})
back.addEventListener("click", () =>{
    if(contador > 0){
        contador--
    } else {contador = adress_images.length - 1;}
    atualizar()
    atualizar_point()
})

//faz os 'points'
for(let i in adress_images){
    const point = document.createElement('div')
    mark.appendChild(point)
    point.id = `point_${i}`

    if(i == 0) {point.classList.add("focu"); anterior = point}
    point.classList.add("points")

    point.addEventListener('click', ()=>{
        contador = Number(i)
        atualizar()
        atualizar_point()   
    })
}
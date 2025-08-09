const adress_imgs = ['imgs/img1.jpg', 'imgs/img2.jpg', 'imgs/img3.jpg', 'imgs/img4.jpg', 'imgs/img5.jpg']
const back = document.querySelector("#back")
const to_go = document.querySelector("#to_go")
const mark = document.querySelector("#mark")
const painel_imagens = document.getElementById("painel")
let count = 0
painel_imagens.src = adress_imgs[0]
back.addEventListener('click', () =>{
    if(count > 0){
        count--
        painel_imagens.src = adress_imgs[count]
    }
})
to_go.addEventListener('click', () =>{
    if(count < (adress_imgs.length -1)){
        count++
        painel_imagens.src = adress_imgs[count]
        
    }
})

// Declara a variável aqui no escopo global para que ela seja acessível
let de_antes = null;

adress_imgs.forEach((_, indice)=> {
    const point = document.createElement("div")
    mark.appendChild(point)
    point.id = `point_${indice}`
    point.classList.add("points")

    // Adiciona a classe 'focu' na primeira bolinha, pois a imagem inicial é a primeira.
    if (indice === 0) {
        point.classList.add("focu");
        de_antes = point; // Salva a primeira bolinha como a inicial
    }

    point.addEventListener("click", ()=>{
        // Verifica se 'de_antes' existe e remove a classe 'focu' dele
        if (de_antes) {
            de_antes.classList.remove("focu");
        }
        
        painel_imagens.src = adress_imgs[indice];
        count = indice;
        
        // Adiciona a classe 'focu' ao elemento clicado
        point.classList.add("focu");
        // E atualiza 'de_antes' para ser o elemento clicado agora
        de_antes = point;
    })
});
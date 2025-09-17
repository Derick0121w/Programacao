const painel = document.getElementById('Painel_items')

async function GerarDivParaCadaElemento_API() {
    const dados = await ((await fetch('https://fakestoreapi.com/products')).json())

    dados.forEach(element => {
        const div_produto = document.createElement('div')
        painel.appendChild(div_produto)
        div_produto.classList.add('div_produto')

        const img = document.createElement('img')
        div_produto.appendChild(img)
        img.src = element.image

        const nome = document.createElement('span')
        div_produto.appendChild(nome)
        nome.innerText = element.title

        const preco = document.createElement('span')
        div_produto.appendChild(preco)
        preco.innerText = `$${element.price}`
        preco.classList.add('preco')

        const description = element.description
        nome.setAttribute('title', description)

        const btn_comprar = document.createElement('button')
        div_produto.appendChild(btn_comprar)
        btn_comprar.innerText = 'COMPRAR'
        btn_comprar.classList.add('bts')
    });
}
GerarDivParaCadaElemento_API()
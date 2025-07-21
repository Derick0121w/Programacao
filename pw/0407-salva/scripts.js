const form = document.getElementById('form')
const input = document.getElementById('texto')
const lista = document.getElementById('lista')
const btn = document.getElementById('btn')
const q = document.getElementById('quantidade')
const qItens = document.getElementById('quantidade-itens')

function atualizaQtdeLi(){
    const lis = document.getElementsByTagName('li')
    qItens.innerText = `Total de itens: ${lis.length}`
}

function atualizaValorInput(){
    btn.disabled = input.value.trim() === ""
    const qtde = input.value.trim().length
    q.innerText = `${qtde} caracter${qtde > 1 ? 'es' : ''}`
}

input.addEventListener('input', function(){
    atualizaValorInput()
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const valor = input.value.trim()
    if (valor === "") return;

    const li = document.createElement('LI')

    const span = document.createElement('SPAN')
    span.innerText = valor
    li.appendChild(span)

    const icone = document.createElement('i')
    icone.classList.add('fa-solid')
    icone.classList.add('fa-pen')

    const btnEditar = document.createElement('button')
    btnEditar.setAttribute('type','button')
    btnEditar.appendChild(icone)
    btnEditar.classList.add('btn-editar')
    btnEditar.addEventListener('click', function(){
        const editavel = icone.classList.contains('fa-pen')
        
        if (editavel) {
            const input = document.createElement('input')
            input.value = span.innerText
            li.removeChild(span)
            li.insertBefore(input, li.firstChild)

            icone.classList.remove('fa-pen')
            icone.classList.add('fa-floppy-disk')
        }else {
            const input = li.firstChild
            const span = document.createElement('span')
            span.innerText = input.value
            li.insertBefore(span, input)
            li.removeChild(input)
            icone.classList.remove('fa-floppy-disk')
            icone.classList.add('fa-pen')
        }
    })
    li.appendChild(btnEditar)

    


    const btnRemover = document.createElement('button')
    btnRemover.setAttribute('type', 'button')
    btnRemover.innerHTML = "<i class='fa-solid fa-trash'></i>"
    btnRemover.classList.add('btn-remover')
    btnRemover.addEventListener('click', function(){        
       lista.removeChild(li)
       atualizaQtdeLi()
    })
    li.appendChild(btnRemover)

    lista.appendChild(li)

    input.value = ""
    input.focus();
    atualizaValorInput()
    atualizaQtdeLi()
})


input.focus();


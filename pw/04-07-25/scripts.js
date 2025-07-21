const input = document.getElementById('input')
const btn = document.getElementById('btn')
const ulist = document.getElementById('ulist')
const form = document.getElementById('form')
input.focus()
btn.disabled = true
function btn(){
    const valor = input.value.trim()
    valor == ''? btn.disabled = true: btn.disabled = false
}
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const valor = input.value.trim()
    if(valor === '') return;
    const li = document.createElement('LI')
    ulist.appendChild(li)
    li.innerText = valor.trim()
    input.value = ''
    btn()
})
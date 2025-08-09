const prompt = require('prompt-sync')()
let a = Number(prompt('Digite um nº: '))
let b = Number(prompt('Digite um segundo nº: '))
if(a<b){
    while(a++ != b){
        process.stdout.write(`${a} `)
    }}
else if(a>b){
        while(a-- != b){
            process.stdout.write(`${a} `)
        }}
else{console.log('São iguais!')}
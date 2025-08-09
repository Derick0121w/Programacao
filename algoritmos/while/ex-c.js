const prompt = require('prompt-sync')()
let a = Number(prompt('Digite um nº: '))
if(a<30){
    while(a++ != 30){
        process.stdout.write(`${a} `)
    }}
else if(a>30){
        while(a-- != 30){
            process.stdout.write(`${a} `)
        }}
else{console.log('É igual a 30')}
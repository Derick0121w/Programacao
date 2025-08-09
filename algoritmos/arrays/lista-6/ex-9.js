const sonhos = ["cachorro", "viagem", "chuva", "comida", "bola"];
for(let i = 0; i< sonhos.length; i++){
    if(sonhos[i][0] !== 'c'){
        sonhos.splice(i, 1)
    }
}
console.log(sonhos)
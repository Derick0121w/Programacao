const valores = [-3, 0, 7, -1, 5, 9, -2];
for(let i = 0; i<valores.length; i++){
    if(valores[i]<0){
        valores.splice(i, 1)
    }
}
console.log(valores)
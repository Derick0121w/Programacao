const prompt = require('prompt-sync')()
const fila = ["Alice", "Jaques", "Charlie", "David"]
console.log("--- Fila Inicial do Banco ---")
console.log(fila.join(", ") || "A fila está vazia.")
for (let i = 0; i < 2; i++) {
    if (fila.length > 0) {
        const clienteAtendido = fila.shift()
        console.log(`\n--- Atendendo Cliente: ${clienteAtendido} ---`)
        console.log("--- Fila Atualizada ---")
        console.log(fila.join(", ") || "A fila está vazia agora.")
    } else {
        console.log("\n--- A fila está vazia. Não há mais clientes para atender. ---")
        break
    }
}
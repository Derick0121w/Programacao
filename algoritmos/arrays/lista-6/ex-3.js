const planetas = ["Terra", "Marte", "Júpiter", "Mercúrio"];
    const n = planetas.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (planetas[j] > planetas[j + 1]) {
                let t = planetas[j]
                planetas[j] = planetas[j + 1]
                planetas[j + 1] = t
            }
        }
    }
console.log(planetas)
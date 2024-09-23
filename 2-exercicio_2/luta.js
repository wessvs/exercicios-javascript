// Calculo de dano

let atacante = prompt("Nome do personagem:")
let poder = parseInt(prompt("Poder:"))

let defensor = prompt("Nome do personagem:")
let vida = 100
let poder_defesa = parseInt(prompt("Poder de defesa:"))
let tem_escudo = confirm("Tem escudo?")
let dano = 0

if (poder > poder_defesa && !tem_escudo) {
    dano = poder - poder_defesa
    vida -= dano
} else if (poder > poder_defesa && tem_escudo) {
    dano = (poder - poder_defesa)/2
    vida -= dano
} 

console.log(`Dano ${dano} \n Vida: ${vida}`)



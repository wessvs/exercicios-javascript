let nome = prompt("Digite seu nome: ")
let visitou = parseInt(prompt("Já visitou alguma cidade? [1] - SIM; [2] NAO "))
let cidades
let contador = 0
if (visitou == 1) {
    do {
    let = cidade = prompt('qual cidade: ')
    cidades += (" " + cidade)
    contador++
    temMais = confirm('Já visitou outra cidade?')
    } while (temMais)

    alert(`${nome} já visitou ${contador} cidades: ${cidades}`)

}
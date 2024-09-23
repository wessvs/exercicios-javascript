// MENU INTERATIVO

// do {
//     opt = parseInt(prompt('Escolha uma opção de 1 a 4 ou 5 para sair'))
//     alert(`A opção escolhida foi: ${opt}!`)
// } while (opt != 5)

let valor_inicial = parseFloat(prompt('Quantidade inicial R$: '))

do{
    action = parseInt(prompt(`Valor atual: R$${valor_inicial} \n [1] Adicionar dinheiro\n[2] Retirar Dinheiro\n[3] Sair`))
    switch(action) {
        case 1:
            valor_inicial += parseFloat(prompt('Quanto deseja adicionar?'))
            break
        case 2:
            valor_inicial -= parseFloat(prompt('Quanto quer retirar?'))
            break
        default:
            break
    }
} while (action != 3)
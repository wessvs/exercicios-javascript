let sair = false
let baralho = ['valette', 'rei', 'coringa', 'rainha']
let carta
while(sair == false) {
    opt = parseInt(prompt(`Você tem ${baralho.length} cartas no baralho! \n 1-Adicionar carta;\n2-Puxar uma carta;3-Sair`))
    switch(opt){
        case 1:
            carta = prompt('Digite o nome da carta: ')
            baralho.push(carta)
            break
        case 2:
            if(baralho.length){
                carta = baralho.pop()
                alert(`Carta ${carta} removida com sucesso`)
            } else {
                alert('Não há cartas no baralho.')
            }
            break
        case 3:
            alert('Você saiu.')
            sair = true
            break
        default:
            alert('Não entendi, digite uma opção válida.')
    }
}
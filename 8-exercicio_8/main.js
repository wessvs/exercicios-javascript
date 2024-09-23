sair = false
imoveis = [
    // opções cadastrados para facilitar:
    {
        "proprietario": "Isadora",
        "quartos": 2,
        "banheiros": 1,
        "garagem": true
    },
    {
        "proprietario": "Bruno",
        "quartos": 3,
        "banheiros": 1,
        "garagem": true
    },
    {
        "proprietario": "Fábio",
        "quartos": 2,
        "banheiros": 1,
        "garagem": false
    }
]

while(sair != true) {
    let opt = parseInt(prompt(`Quantidade de Imoveis cadastrados: ${imoveis.length}\n1-Salvar Novo Imóvel;\n 2-Mostrar imóveis salvos;\n3-Sair`))
    switch(opt) {
        case 1:
            const novoImovel = {}
            novoImovel.proprietario = prompt('Nome do Proprietário:')
            novoImovel.quartos = parseInt(prompt('Quartos:'))
            novoImovel.banheiros = parseInt(prompt('Banheiros:'))
            novoImovel.garagem = confirm('Tem garagem? Confirme para Sim, Cancelar para Não')

            imoveis.push(novoImovel)
            alert('Imovel adicionado!')

            break

        case 2:
            if(imoveis.length){
                for(let i=0; i<imoveis.length; i++){
                    let imovel = imoveis[i]
                    alert(`Proprietário: ${imovel.proprietario};\nQuartos: ${imovel.quartos};\nBanheiros: ${imovel.banheiros};\nTem garagem: ${imovel.garagem ? 'Sim':"Não"}`)
                }
            } else {
                alert('Não há imoveis cadastrados')
            }
            break

        case 3:
            alert('Você saiu!')
            sair = true
            break
        
        default:
            alert('Opção inválida..')
        }
    }

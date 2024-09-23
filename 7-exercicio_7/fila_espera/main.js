let fila = [
    'Wessley', 'Beatriz',
    'Alyson', 'Taina',
    'João', 'Amanda'
]
let opt = ''
do{
    alert(fila)

    prompt(`Escolha uma opção:
        1 - Adicionar paciente;
        2 - Consultar Paciente;
        3 - Sair.
        `)
    
    switch(opt) {
        case '1':
            let newPacient = prompt('Nome do novo paciente: ')
            fila.push(newPacient)
            alert('Paciente adicionado a fila!')
            break
        case '2':
            if(fila.length) {  
                pacienteChamado = fila.shift()
                alert(pacienteChamado)
            } else {
                alert('Não há paciente na fila.')
            }
            break
        case '3':
            alert('Encerrando o programa.')
            break

        default: 
            alert('Opção inválida, escolha entre 1 e 3.')
            break
    }
} while(opt != 3)
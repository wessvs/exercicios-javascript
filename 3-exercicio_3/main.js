let valor = parseFloat(prompt("Valor em metros: "))
let unidadeMedida = prompt('1. mm\n2. cm\n3. dm\n4. dam\n5 hm\n6. km')
let resultado

switch (unidadeMedida) {
    case 'mm':
        resultado = valor*1000
        alert(resultado)
        break
    case 'cm':
        resultado = valor*100
        alert(resultado)
        break
    case 'dm':
        resultado = valor*10
        alert(resultado)
        break
    case 'dam':
        resultado = valor/10
        alert(resultado)
        break
    case 'hm':
        resultado = valor/100
        alert(resultado)
        break
    case 'km':
        resultado = valor/1000
        alert(resultado)
        break
    default:
        alert('Opção inválida!')
    }


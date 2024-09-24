function calculaAreaTriangulo(base, altura) {
    return (base * altura) / 2
}

function calculaAreaRetangulo(base, altura) {
    return base * altura
}

function calculaAreaTrapezio(baseMaior, baseMenor, altura) {
    let area = ((baseMaior + baseMenor) * altura) / 2 
    return area
}

function calculaAreaCirculo(raio) {
    let area = 3.14 * (raio ** 2)
    return area
}

function calculaArea(option) {
    let base, altura
    switch(option) {
        case 1:
            base = parseFloat(prompt('Base:'))
            altura = parseFloat(prompt('Altura:'))
            return calculaAreaRetangulo(base, altura)

        case 2:
            base = parseFloat(prompt('Base:'))
            altura = parseFloat(prompt('Altura:'))
            return calculaAreaTriangulo(base, altura)

        case 3:
            base = parseFloat(prompt('Lado:'))
            return calculaAreaRetangulo(base, base)

        case 4:
            base = parseFloat(prompt('Base Maior:'))
            baseMenor = parseFloat(prompt('Base Menor:'))
            altura = parseFloat(prompt('Altura:'))
            return calculaAreaTrapezio(base, baseMenor, altura)
        case 5:
            let raio = parseFloat(prompt('Raio: '))
            return calculaAreaCirculo(raio)
        default:
            alert('Opção inválida!') 
    }
    
}

let option;
let resultado

do {
    option = parseInt(prompt('Área que deseja calcular:\n1 - Retâgulo;\n2 - Triângulo;\n3 - Quadrado;\n4 - Trapézio;\n5 - Círculo;\n6 - Sair'
     ))
     if (option == 6) {
        alert('Você saiu...')
        break
     }
        resultado = calculaArea(option)
        alert(`A área é de: ${resultado}cm`)

} while(option !== 6)
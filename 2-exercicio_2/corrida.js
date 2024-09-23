let nome_veiculo_um = prompt("Nome 1° Veiculo: ")
let velocidade_veiculo_um = parseFloat(prompt("Velocidade 1° Veiculo: "))
let nome_veiculo_dois = prompt("Nome 2° Veiculo: ")
let velocidade_veiculo_dois = parseFloat(prompt("Velocidade 2° Veiculo: "))

let resultado = (velocidade_veiculo_um > velocidade_veiculo_dois ? nome_veiculo_um : nome_veiculo_dois)

document.write(`V1: ${nome_veiculo_um} - ${velocidade_veiculo_um}km/h`)
document.write(`\nV2: ${nome_veiculo_dois} - ${velocidade_veiculo_dois}km/h`)

document.write(`\nO ${resultado} é o mais rápido`)

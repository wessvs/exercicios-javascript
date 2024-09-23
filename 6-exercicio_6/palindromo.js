let palavra = prompt('Escreva uma palavra: ')
let contrario = palavra.split('').reverse().join('')

if(palavra == contrario) {
    alert('A palavra é um palíndromo')
} else {
    alert(`A palavra "${palavra}" não é um palíndromo. Ao contrário fica "${contrario}"`)
}
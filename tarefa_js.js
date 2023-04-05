// Exercícios
//1 - Escreva uma função que some dois números e retorne o valor do resultado

function soma(numA, numB) {
    // concatenação de strings:
    // console.info('soma(' + numA.toString() + ', ' + numB.toString() + ')')
    // interpolação de strings:
    console.info(`soma(${numA}, ${numB})`) // mais recomendado neste caso

    return numA + numB
}

let resultado = soma(10, 23);
console.info(`resultado: ${resultado}`)

console.info('--------------------------')


//2 - Escreva uma função que permita uma pessoa saber quantos anos ela terá até o fim deste ano.

function idadeFinalAno(anoDeNascimento) {
    console.info(`idadeFinalAno(${anoDeNascimento})`)
    // Date
    let anoAtual = new Date().getFullYear();
    console.debug(anoAtual)
    let idade = anoAtual - anoDeNascimento
    return idade;
}

let anoNascimento = 1999
let minhaIdade = idadeFinalAno(anoNascimento);
console.info(`Idade ao final do ano ${anoNascimento}: ${minhaIdade}`)

//3 - Crie uma função que recebe como parâmetro  o nome, e o ano de nascimento de uma pessoa e diga quantos anos ela vai ter até o fim deste ano. Além disso, retorne um objeto contendo os atributos nome e idade.


//4 - Escreva uma função que transforma uma string em minúscula (sem utilizar nenhum método)

//5 - Crie uma função que receba um número como parâmetro e retorne o próximo múltiplo de 3.
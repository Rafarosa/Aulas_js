Exercícios
//1 - Escreva uma função que some dois números e retorne o valor do resultado

function soma(a,b){
    return a +b
} 

let resultado = soma(10,23);
console.log(resultado)
//2 - Escreva uma função que permita uma pessoa saber quantos anos ela terá até o fim deste ano.

function idadeFinalAno(anoDeNascimento){
    let anoAtual = 2023;
    let idade = anoAtual - anoDeNascimento;
    let idadeFinalAno = idade + 1;
    return idadeFinalAno;
}

let minhaIdade = idadeFinalAno(1989);
console.log(minhaIdade);
//3 - Crie uma função que recebe como parâmetro  o nome, e o ano de nascimento de uma pessoa e diga quantos anos ela vai ter até o fim deste ano. Além disso, retorne um objeto contendo os atributos nome e idade.

//4 - Escreva uma função que transforma uma string em minúscula (sem utilizar nenhum método)

//5 - Crie uma função que receba um número como parâmetro e retorne o próximo múltiplo de 3.
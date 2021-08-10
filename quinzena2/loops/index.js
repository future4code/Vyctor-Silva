//Exercícios de interpretação de código
/*
//O que o código abaixo está fazendo? Qual o resultado impresso no console?
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)
// Imprimirá 10, pois "valor" é a soma i + oq já está armazenado em valor



//Leia o código abaixo:
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

//a) O que vai ser impresso no console?
// Todos os numeros maiores que 18 do array lista (19,21,23,25,27,30)
//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se não, o que poderia ser usado para fazer isso?
// Não, é necessario utilizar o indexof 

//3. Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//Imprime a quantidade de linhas que o usuario solicita com o caractere "*", um a um devido a declaração linha += "*"
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))// 4
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){ //Enquanto 0 < 4 
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}
*/


//Exercícios de escrita de código
//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

//c) Por fim, imprima o array com os nomes dos bichinhos no console

let animaisEstimaçao = Number(prompt("Quantos animais de estimação você tem?"))

if(animaisEstimaçao === 0){
    console.log("Que pena! Você pode adotar um pet!")
}

let arrayNomes= []


for (let i = 1; i  <= animaisEstimaçao; i++){
    let nomesAnimais = prompt("Digite o nome do seu animal")
    
    let nomeBichinhos = arrayNomes.push(nomesAnimais)
    
}
console.log(arrayNomes)

//2. Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
//crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
const arrayOriginal = [1,2,3,4,5,6,7,8,9,10]
//a) Escreva um programa que **imprime** cada um dos valores do array original.
function array (){
    console.log(arrayOriginal)
}
array()
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
function dividirPor10 (){
    let i = 0
    let imprimirArrayDividindoPor10 = i[arrayOriginal] / 10
    console.log(imprimirArrayDividindoPor10)
}
dividirPor10()
//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
//1
/*
let array   //declara a variavel array, porém não atribui nenhum valor
console.log('a. ', array) //imprimirá a. undefined

array = null  //alterou a variavel array e atribuiu o null
console.log('b. ', array) //imprimirá b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //atribuiu os valores [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] há constante array
console.log('c. ', array.length) //imprimirá c. e quantidade de itens desse array (11)


let i = 0    //cria constante i e atribui o valor 0
console.log('d. ', array[i]) //imprimirá o valor da constante i=0, dentro do array (3)

array[i+1] = 19  // 0 + 1 = 19, o 19 ficará na 1º posição do array
console.log('e. ', array) //imprimirá c. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6] //declarou a constante valor e somou quanto ela vale no array(3) + 6 =9
console.log('f. ', valor) //imprimirá f. 9

//2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//imprimirá SUBI NUM ÔNIBUS MIRROCOS  27    (caracteres)


//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

const nome = prompt("Por favor digite seu nome")
const emailUsuario = prompt("Por favor digite seu email")

console.log("O e-mail", emailUsuario, "foi cadastrado com sucesso. Seja bem-vinda(o),", nome)

//2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
const comidaFavorita = ["strogonoff", "banoffee", "pudim", "banana", "frango"]
//a) Imprima na tela o array completo
console.log(comidaFavorita)
//b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
console.log("Essas são as minhas comidas preferidas:", comidaFavorita[0])
console.log(comidaFavorita[1])
console.log(comidaFavorita[2])
console.log(comidaFavorita[3])
console.log(comidaFavorita[4])
//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
const comidaUsuario = prompt("Qual é a sua comida preferida?")
let u = 0
comidaFavorita[u+1]= comidaUsuario
console.log(comidaFavorita)
*/

//3. Faça um programa, seguindo os passos:
//a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
const listaDeTarefas = []
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
const primeiraTarefa = prompt("Digite uma tarefas para realizar no dia")
const segundaTarefa = prompt("Digite sua segunda tarefa para realizar no dia")
const terceiraTarefa = prompt("Digite sua terceira tarefa para realizar no dia")

listaDeTarefas.push = primeiraTarefa
listaDeTarefas.push = segundaTarefa
listaDeTarefas.push = terceiraTarefa
//c) Imprima o array na tela
console.log(listaDeTarefas)
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
const indice = prompt("Digite o indice da uma atividade que já realizou (0, 1 ou 2)")
//e) Remova da lista o item de índice que o usuário escolheu.
listaDeTarefas.splice(Number(indice), 1)
//f) Imprima o array na tela
console.log(listaDeTarefas)
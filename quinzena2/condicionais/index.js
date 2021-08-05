//Exercícios de interpretação de código
/*
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
*/
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//Ele pega a variavel numero e ve se é divisil por 2. Se for passa no teste, caso não, não passa no teste.

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Todos os numeros divisiveis por 2

//c) Para que tipos de números a mensagem é "Não passou no teste"?  
//Todos que não sejam divisiveis por 2

/*
O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
*/

/*
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//Para informar a fruta e os preços das mesmas

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// O preço da fruta Maçã é R$ 2.25

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//Imprimirá que o preço é 5, pois o proximo break está abaixo do "preço = 5"

//3. Leia o código abaixo:

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
 let mensagem = "Essa mensagem é secreta!!!"
 
}

console.log(mensagem)
*/

//a) O que a primeira linha está fazendo?
//Declarou a variavel numero, pedindo para o usuario informar um numero. E transforma no tipo Numero (Number)

//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Imprimirá Esse número passou no teste, no caso do -10 não imrpimirá nada.

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim, pois a varivel mensagem (filho) está em escopo diferente do console(pai). E o pai não acessa os dados do filho


//Exercícios de escrita de código
//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
//   a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
//   b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//   c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
const idadeUsuario = Number(prompt("Digite sua idade!"))

if(idadeUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}
  

//Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoUsuario = prompt("Digite seu turno M (Matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase() 

if (turnoUsuario === "M") {
    console.log("Bom Dia!")
} else if (turnoUsuario === "V") {
    console.log("Boa Tarde!")
} else if (turnoUsuario === "N") {
    console.log("Boa Noite!")
} else {
    console.log("Por favor digitar algo valido (M, V ou N)")
}

//Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

switch (turnoUsuario){
case "M":
    console.log("Bom Dia!")
    break;
case "V" :
    console.log("Boa Tarde!")
    break
case "N":
    console.log("Boa Noite!")
    break
    default:
    console.log("Por favor digitar algo valido (M, V ou N)")

}

/*
Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um 
filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código
que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso,
então verifique se seu amigo ou amiga vai topar assistir o filme. 
Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("
*/

const fantasia = prompt("Qual o gênero de filme você gosta de assistir?") === "fantasia"
const ingresso = prompt("Quanto custa o ingresso?")

if (fantasia && ingresso < 15){
   console.log("Bom filme!")
} else {
   console.log("Escolha outro filme :(")
}









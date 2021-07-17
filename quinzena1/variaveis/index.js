let a = 10 //Usou a variavel let para criar a constante "a" com o valor "10"
let b = 10 //Usou a variavel let para criar a constante "b" com o valor "10"

console.log(b) //Vai imprimir no console a constante "b"

b = 5 //alterou a constante "b" para o valor "5"
console.log(a, b) //Vai imprimir no console a constante "a" e "b", com o valor "5", pois foi alterado

//________________________________________________________

let a = 10 //Usou a variavel let para criar a constante "a" com o valor "10"
let b = 20 //Usou a variavel let para criar a constante "b" com o valor "20"
let c  //Usou a variavel let para criar a constante "c", porém não atribuiu valor undefined
c = a  //alterou a constante "c" para o valor da constante "a"
b = c  //alterou a constante "b" para o valor da constante "c"
a = b  //alterou a constante "a" para o valor da constante "b" mas como nada foi atribuido antes creio que aparecerá undefined

console.log(a, b, c) //Vai imprimir no console a constante "a","b" e "c".

//________________________________________________________

//Usou a variavel let para criar a constante "p"
//pedindo uma informação ao usuario "Quantas horas você trabalha por dia?"
let p = prompt("Quantas horas você trabalha por dia?")

//Usou a variavel let para criar a constante "t"
//pedindo uma informação ao usuario "Quanto você recebe por dia?"
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)  //Pergunta ao usuario quanto recebe por hora (?)Não tenho certeza(?)

/*Dica: como eu escreveria
let horasTrabalhadaPordia = prompt("Quantas horas você trabalha por dia?")
let recebePorDia = prompt("Quanto você recebe por dia?")
*/


//1___________________________________________
const nome 
const idade

console.log(typeof nome) 
console.log(typeof idade)

//Acontece o erro Uncaught SyntaxError: Missing initializer in const declaration no console

const nome = prompt("Qual é o seu nome?") 
const idade = prompt("Qual é sua idade?")

console.log(typeof nome) 
console.log(typeof idade) //Imprimiu no console que as variaveis são string

console.log("Olá", nome, "você tem", idade, "anos")
//___________________________________________________

//2__________________________________________________

const roupa = prompt("Você está usando uma roupa azul hoje?")
const cor = prompt("Você gosta de azul?")
const futebol = prompt("Você gosta de futebol?")

console.log("Você está usando uma roupa azul hoje?", roupa, "Você gosta de azul?", cor, "Você gosta de futebol?", futebol)
//__________________________________________________


//3_________________________________________________
let a = 10
let b = 25
let c = 0
c = a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Exercícios de interpretação de código
//1
const bool1 = true  //declara a uma variavel com o nome bool1 é diz que é verdadeira
const bool2 = false //declara a uma variavel com o nome bool2 é diz que é falsa
const bool3 = !bool2 //declara a uma variavel com o nome bool3 é diz que tem quer ser OPOSTO ao bool2 (true)

let resultado = bool1 && bool2 //declara uma variavel com o nome resultado e usa o operador logico && (false)
console.log("a. ", resultado) //imprimi no console o texto a. false

resultado = bool1 && bool2 && bool3 //declara uma variavel com o nome resultado e usa o operador logico && (false)
console.log("b. ", resultado) //imprimi no console o texto b. false

resultado = !resultado && (bool1 || bool2) //declara uma variavel com o nome resultado e usa o operador logico ! && e || (true)
console.log("c. ", resultado) //imprimi no console o texto c. true

console.log("d. ", typeof resultado) //imprimi no console o texto d. e o tipo da variavel (boolean)

//2 e 3
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
primeiroNumero= Number(primeiroNumero)
segundoNumero= Number(segundoNumero)

const soma = (primeiroNumero + segundoNumero)
console.log(soma)
//todo prompt é string temos que transformar para numero

//Exercícios de escrita de código
//1
//a) Pergunte a idade do usuário
let idade = prompt("Qual a é sua idade?")
//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
let idadeAmigo = prompt("Qual a é idade do seu melhor amigo(a)?")
idade= Number(idade)
idadeAmigo= Number(idadeAmigo)

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
console.log(idade > idadeAmigo)
//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
console.log(idade - idadeAmigo)

//2
//a) Peça ao usuário que insira um número **par**
let numero = prompt("Por favor informar um numero par")
numero= numero % 2
//b) Imprima na console **o resto da divisão** desse número por 2.
console.log(numero)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//Sim, sempre retorna 0. Pois todo numero par é divisivel por 2
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//Sempre retorna 1.


//3 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
const idadeAnos = prompt("Quantos anos voce tem?")
//a) A idade do usuário em meses
console.log(idadeAnos * 12)
//b) A idade do usuário em dias
console.log(idadeAnos * 365)
//c) A idade do usuário em horas
console.log(idadeAnos * 8760)


//4.Faça um programa que pergunte ao usuário dois números.
const numero1 = prompt("Por favor informar um numero")
const outroNumero= prompt("Por favor informar outro numero")
// Em seguida, faça as operações e imprima no console as seguintes mensagens:
//O primeiro numero é maior que segundo? true ou false
console.log(numero1 > outroNumero)
//O primeiro numero é igual ao segundo? true ou false
console.log(numero1 === outroNumero)
//O primeiro numero é divisível pelo segundo? true ou false
console.log((numero1 / outroNumero) === 1 )
//O segundo numero é divisível pelo primeiro? true ou false
console.log((outroNumero / numero1) === 1)
//obs: O resultado true ou false vai depender dos números inseridos e do resultado das operações.
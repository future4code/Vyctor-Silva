//Exercicios aula
/*
//Crie uma função que imprima no console “Olá Mundo!”
function imprimirNoConsole() {
console.log("Olá Mundo")

}

imprimirNoConsole ()

//Crie uma função que receba um nome e imprima no console `Olá [nome]`, e a invoque com 3 nomes diferente

function imprimirNomes (nome) {
console.log(`Olá ${nome}`)

}

imprimirNomes ("Andre")
imprimirNomes ("Raissa")
imprimirNomes ("Vyctor")
*/


//Interpretação
//1. Leia o código abaixo
function minhaFuncao(variavel) {
return variavel * 5
}

console.log(minhaFuncao(2))  
console.log(minhaFuncao(10))


//a) O que vai ser impresso no console?
//R:
//Irá imprimir no console 2*5=10
//Irá imprimir no console 10*5=50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//R: Não aparecerá no console, pois não há solicitação para aparecer no console

//2. Leia o código abaixo
let textoDoUsuario = prompt("Insira um texto"); //Pede um texto ao usuario e salva na variavel textoDoUsuario

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura") 
//ve se o caractere "cenoura" está dentro do texto e retorna com true ou false
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//R: Ela pede um texto ao usuario e analisa se o caractere "cenoura" esta no texto. Retornando com true ou false por ser um Booleano

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura
//R:   true
//ii.  CENOURA é bom pra vista
//R:   true
//iii. Cenouras crescem na terra
//R:   true


//Exercícios de escrita de código
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

function sobreMim() {
console.log("Eu sou Vyctor, tenho 21 anos, moro no Rio de Janeiro e sou estudante.")
}

sobreMim()

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number),
//a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

function informações(nome, idade, endereço, profissão)  {
    const apresentação =`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}.`
    const strings = apresentação.toString()
    console.log(strings)
    
}

informações("Vyctor", "21", "Rio de Janeiro", "tecnico telecom")

//2.Escreva as funções explicadas abaixo:
//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
   function somarInformaçoes (idade, anos) {
    const somar = idade + anos
    console.log(somar)

}
  somarInformaçoes(21, 2020)

//b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
    function booleano (idade, anos) {
     const valor = Number(idade)
     const valor2= Number(anos)
     console.log(valor >= valor2)
     
    }

    booleano(18, 18)

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function numeroParOuNao (numero){
    const a = numero % 2
    const b = a === 0
    console.log(b)

}
numeroParOuNao(15)

//d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function verString (string) {
  const y = string.toUpperCase()
  const z = y.length
 console.log(y, z)


  
}

verString("Dia")


//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
//Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
//inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

const primeiroNumero = Number(prompt("Digite um numero"))
const segundoNumero = Number(prompt("Digite outro numero"))

function adicao (numero1, numero2) {
    const somando = numero1 + numero2
    console.log(somando)
}

adicao(primeiroNumero, segundoNumero)

function subtracao (numero1, numero2) {
    const subtrair = numero1 - numero2
    console.log(subtrair)

}

subtracao(primeiroNumero, segundoNumero)

function multiplicação (numero1, numero2) {
    const multiplicar = numero1 * numero2
    console.log(multiplicar)

}

multiplicação(primeiroNumero, segundoNumero)


function divisao (numero1, numero2) {
    const dividir = numero1 / numero2
    console.log(dividir)

}

divisao(primeiroNumero, segundoNumero)
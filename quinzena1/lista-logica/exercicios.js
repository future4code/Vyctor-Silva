// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}


// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt("Digite a altura do triangulo")
  const largura = prompt("Digite a largura do triangulo")

  console.log(Number(altura) * Number(largura))

}

// Exercício 2
function imprimeIdade() {
  const anoAtual = prompt("Digite o ano atual")
  const anoNascimento = prompt("Digite aqui seu ano de nascimento")

  console.log(Number(anoAtual) - Number(anoNascimento))

}

// Exercício 3
function calculaIMC() {
  const peso = prompt("Digite seu peso (kg)")
  const tamanho = prompt("Digite sua altura (m)")

  console.log(Number(peso) / Number(tamanho * tamanho))
}

// Exercício 4
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu e-mail")
  const frase = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(frase)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Digite sua primeira cor favorita")
  const cor2 = prompt("Digite sua segunda cor favorita")
  const cor3 = prompt("Digite sua terceira cor favorita")

  console.log([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  const string = prompt("Digite uma string")

  console.log(string.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  const valorEspetaculo = prompt("Custo do espetaculo de teatro")
  const valorIngresso = prompt("Valor do ingresso")

  console.log(Number(valorEspetaculo) / Number(valorIngresso))
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const palavra = prompt("Digite uma string")
  const palavra2 = prompt("Digite outra string")
  
  console.log(palavra.length === palavra2.length) 

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const primeiraString = prompt("Digite uma string")
  const segundaString = prompt("Digite outra string")

 const novaPrimeiraString = primeiraString.toLowerCase()
 const novaSegundaString = segundaString.toLowerCase()

  console.log(novaPrimeiraString === novaSegundaString) 

}

// Exercício 10
function checaRenovacaoRG() {
  const ano = Number(prompt("Digite o ano atual"))
  const nascimentoAno = Number(prompt("Digite seu ano de nascimento"))
  const identidade = Number(prompt("Digite o ano em que sua carteira de identidade foi emitida"))

  let idadeAnos = ano - nascimentoAno
  let RG = ano - identidade
  let renovacao20 = (idadeAnos <=20) && (RG <= 5 ) 
  let renovacao50 = (20 < idadeAnos <= 50)  || (RG <= 10)
  let renovacaoMais = (idadeAnos > 50) && (RG <= 15)

  let fazerRenovação=  (renovacao20 || renovacao50 || renovacaoMais)

  console.log(fazerRenovação)

}

// Exercício 11
function checaAnoBissexto() {
  const anoUsuario = Number(prompt("Digite um ano"))

  let bissextos = Number(anoUsuario % 400) === 0 
  let bissextos2 = Number(anoUsuario % 4) === 0 
  let bissextos3 = Number((anoUsuario % 100) === 0) && bissextos

  let bissextao = bissextos && bissextos2 && bissextos3
  console.log(bissextao)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  const requesito1 = prompt("Você tem mais de 18 anos?")
  const requesito2 = prompt("Você possui ensino médio completo?")
  const requesito3 = prompt("Você possui disponibilidade exclusiva durante os horários do curso")

  let estudante = requesito1 === requesito2 === requesito3
  let estudanteLabenu = estudante === sim

  console.log(estudanteLabenu)


}
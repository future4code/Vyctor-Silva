// EXERCÍCIO 01

function inverteArray(array) {
  let arrayExemplo = array
  const meuArrayInvertido = arrayExemplo.slice(0).reverse();
  return meuArrayInvertido
 
}



// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let novoArray = []
  for (let i = 0;i < array.length;i++) {
    if (array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i])
    }
  }
  return novoArray
}



// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayPar = array
  let numerosPares = arrayPar.filter((item, indice, array) => {
  return item % 2 === 0     
  })
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let arrayMaior = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] > arrayMaior){
      arrayMaior = array[i]
    }
  }
  return arrayMaior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}

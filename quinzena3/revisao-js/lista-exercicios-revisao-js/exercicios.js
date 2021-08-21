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
  let arrayElementos = array
  return arrayElementos.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  //const booleano1 = true
  //const booleano2 = false
  //const booleano3 = !booleano2 = true
  //const booleano4 = !booleano3 = false
//a) `booleano1 && booleano2 && !booleano4` 

//b) `(booleano1 && booleano2)false || false !booleano3` 

//c)  `(booleano2 || booleano3) true && true (booleano4 || booleano1) 

//d) `!(booleano2 && booleano3) true || false!(booleano1 && booleano3)` 

//e) `!(booleano1) && !(booleano3)false || true (!booleano4 && booleano3 && booleano3)`
 const array = [false, false, true, true, true ]
 return array

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const arrayNovo = []
  for(let numero= 0; arrayNovo.length < n; i++){
        if(numero % 2 === 0){
        arrayNovo.push(numero)
       }
  }
  return arrayNovo
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  if(a === b && b=== c ){
    return "Equilátero"
  }else if(a === b && b !== c){
    return "Isósceles" 
  }else if(a !== b && b !== c){
    return "Escaleno"
  }
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

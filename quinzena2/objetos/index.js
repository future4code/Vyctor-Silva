//1. Leia o código abaixo

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}
//Cria o objeto filme, com as chaves: nome, ano, elenco (Array) e transmitransmissoesHoje (Array)

//a) O que vai ser impresso no console?
console.log(filme.elenco[0]) //Ira imprimir no console "Matheus Nachtergaele"
console.log(filme.elenco[filme.elenco.length - 1]) //Ira imprimir no console a ultima array Virginia Cavendish
console.log(filme.transmissoesHoje[2]) //Ira imprimir no console canal: "Globo", horario: "14h"

//2. Leia o código abaixo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//a) O que vai ser impresso no console?
console.log(cachorro) //Ira imprimir nome: "Juca", idade: 3, raca: "SRD"
console.log(gato) //Ira imprimir nome: "Juba", idade: 3, raca: "SRD"
console.log(tartaruga) //Ira imprimir nome: "Jubo", idade: 3, raca: "SRD"

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
//Copia todas as informações de um objeto.

//3.Leia o código abaixo
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}
//a) O que vai ser impresso no console?
console.log(minhaFuncao(pessoa, "backender"))  //Ira imprimir false, pois é o que consta na propriedade backender
console.log(minhaFuncao(pessoa, "altura")) // undefined
//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Por que não foi declarado a propriedade altura no objeto PESSOA

//Exercícios de escrita de código
//1. a)

const objeto = {
    nome: "Fabio",
    apelidos: ["Panda", "Fabião", "Grande Soldador"],
}

function funcaoobjeto() {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)

}

//b)

const novoObjeto = {
    ...objeto, 
    apelidos:["Fabinho", "Fabinhozinho", "Imperatriz"],
}

//funcaoobjeto(novoObjeto)  //botei o nome do novo objeto como parametro, mas a mudança não correu.
const maisUmObjeto = `Eu sou ${novoObjeto.nome}, mas pode me chamar de: ${novoObjeto.apelidos[0]}, ${novoObjeto.apelidos[1]} ou ${novoObjeto.apelidos[2]}`
console.log(maisUmObjeto)

//2. Resolva os passos a seguir: 

const familia = {
    nome: "Alexandre",
    idade: 40,
    profissao: "eletricista"
}

const  familiaDoMeuAmigo = {
    nome: "Alex",
    idade: 35,
    profissao: "Mecanico"
}

function funcaoArray (algo) {
    let array = [
        nome
    ]
}
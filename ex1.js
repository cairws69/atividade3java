import PromptSync from "prompt-sync";
const prompt= PromptSync()

function calculo(precoTotal){
console.log("Digite o desconto: ")
const desconto = parseFloat(prompt("desconto: "))
const precoFinal = precoTotal * (1-desconto)
return precoFinal
}

function calcularPrecoComDesconto(valor,qtd,callback){
const precoTotal = valor * qtd
const precoComDesconto = callback(precoTotal)
return precoComDesconto

}
console.log("Digite o valor do produto: ")
var valor = parseInt(prompt("valor: "))
console.log("Digite a quantidade do produto: ")
var qtd = parseInt(prompt("quantidade: "))
const precoFinal = calcularPrecoComDesconto(valor,qtd,calculo)
console.log(`O preço final é ${precoFinal.toFixed(2)}`)
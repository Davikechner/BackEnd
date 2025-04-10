//-01
let num1 = 10
let num2 = 5
 
let soma_adicao = num1 + num2
console.log("A soma do numero", num1, "mais", num2, "é igual a:", soma_adicao)

let soma_subtracao = num1 - num2
console.log("A subtração do numero", num1, "mais", num2, "é igual a:", soma_subtracao)

let soma_multiplicacao = num1 * num2
console.log("A multiplicação do numero", num1, "mais", num2, "é igual a:", soma_multiplicacao)

let soma_divisao = num1 / num2
console.log("A divisão do numero", num1, "mais", num2, "é igual a:", soma_divisao)
console.log(" ")



//-02
let idade1 = 60
let idade2 = 50
 
let comparacao = idade1 > idade2 ? `A pessoa com ${idade1} anos é a mais Velha`: `A pessoa com ${idade2} anos é a mais Velha`;
console.log(comparacao)
console.log(" ")



//-03
let idade = 24
let comparar = idade >= 18 ? `Se a pessoa possui ${idade} anos ela é maior de idade` : `Se a pessoa possui ${idade} anos ela é menor de idade`;
console.log(comparar)
console.log(" ")



//-04
let numero = 10
let comparador = numero % 2 == 0 ? `O numero ${numero} é Par` : `O numero ${numero} é Impar`;
console.log(comparador)
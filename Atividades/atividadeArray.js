//-01
let colegas = ["Davi", "Ariane", "Amanda", "Victor", "Ana Livia"];
console.log(colegas[2]);
colegas.push("Arhur");
colegas.shift();
console.log(colegas);
console.log(" ")



//-02
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.reverse();
console.log(numeros);
numeros.sort((a, b) => a - b);
console.log(numeros);
let numerosString = numeros.join(" - ");
console.log(numerosString);
console.log(" ")



//-03
let notas = [6.5, 7.0, 5.5, 8.0];
let soma = notas.reduce((acc, nota) => acc + nota, 0);
let media = soma / notas.length;
console.log(media);
if (media >= 6) {
console.log("A média é maior ou igual a 6.");
} else {
console.log("A média é menor que 6.");
}
console.log(" ")



//-04
let frutas = ["banana", "maçã", "pera", "uva", "melão"];
let comA = frutas.filter(fruta => fruta.includes("a"));
console.log(comA);
if (!frutas.includes("abacate")) {
frutas.push("abacate");
}
console.log(frutas);
console.log(" ")



//-05
let carrinho = [];
function adicionarItem(item) {
carrinho.push(item);
}
function removerItem(item) {
let index = carrinho.indexOf(item);
if (index !== -1) {
carrinho.splice(index, 1);
}
}
function listarItens() {
console.log("Itens no carrinho:", carrinho);
}
adicionarItem("Produto 1");
adicionarItem("Produto 2");
removerItem("Produto 1");
listarItens();
console.log(" ")



//-06
let numeros6 = [10, 5, 8, 2, 7];
let soma6 = numeros.reduce((acc, val) => acc + val, 0);
let produto = numeros.reduce((acc, val) => acc * val, 1);
console.log(soma);
console.log(produto);
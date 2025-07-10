console.log("Hello World!"); //FUNÇÂO PARA IMPRIMIR

var valor = 20;
valor.toFixed(2);  "20.00" //VAI ADICIONAR APENAS 2 CASAS DECIMAIS

var ativo = true
ativo.toSting(); "True" //VAI RETORNAR EM STRING

var nome = "Hello World";
nome.toLowerCase(); //VAI MUDAR AS PALAVRAS PRA MINUSCULO

var estado = ["Rondônia", "Mato Grosso"]
estado [0] //PARA ACESSAR

var linguagens = ["JavaScript","PHP","JAVA"]
linguagens [1] = "Python" //IRA MUDAR A POSIÇÂO SELECIONADA PARA OQ VC QUER

var linguagens = ["JavaScript","PHP","JAVA"]
console.log(linguagens.length); //PARA SABER QUANDO ELEMENTOS TEM DENTRO DO ARRAY

var nome ;
console.log(nome) //VAI IMPRIMIR UNDEFINED(a variavel n foi definida)

var telefones = [
    "(11) 98899 - 8787",
    "(69) 99257 - 7045",
    "(91) 93453 - 9921"
] //PARA N PRECISAR CRIAR VARIAS VARIAVEIS COM NOMES DIFERENTES(ex: telefone1,telefone2)

const aula = "JavaScript";
aula = "JS"; //A VARIAVEL SERA IMUTAVEL(nao podera ser atualizada)

1 == "1" || "a" == "a" //True
35 === "35" && 1 == 10 //False
!( "a" == 1) //True


// ------------------ VARIÁVEIS ------------------
var nome = "João";       // var (forma antiga, escopo de função)
let idade = 25;          // let (escopo de bloco, mais moderno)
const PI = 3.14159;      // const (constante, valor não muda)

// ------------------ TIPOS DE DADOS ------------------
let texto = "Olá Mundo"; // String
let numero = 10;         // Number
let decimal = 3.14;      // Float
let booleano = true;     // Boolean
let nulo = null;         // Null
let indefinido;          // Undefined
let simbolo = Symbol();  // Symbol
let objeto = {nome: "Ana", idade: 22}; // Object

// ------------------ OPERADORES ------------------
// Aritméticos: + - * / %
let soma = 5 + 2;
let sub = 5 - 2;
let mult = 5 * 2;
let div = 10 / 2;
let resto = 10 % 3;

// Atribuição: = += -= *= /= %=
let x = 10;
x += 5;

// Comparação: == === != !== > < >= <=
let igual = (5 == "5");       // true (compara valor)
let estritamenteIgual = (5 === "5"); // false (valor e tipo)
let diferente = (5 != "5");   // false
let estritamenteDiferente = (5 !== "5"); // true

// Lógicos: && || !
let condicao = (true && false); // false
let ou = (true || false);       // true
let negado = !true;             // false

// ------------------ ESTRUTURAS DE CONTROLE ------------------
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

switch (idade) {
    case 18:
        console.log("Tem 18 anos");
        break;
    default:
        console.log("Idade diferente de 18");
}

for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

do {
    console.log(j);
    j--;
} while (j > 0);

// ------------------ FUNÇÕES ------------------
function saudacao(nome) {
    return "Olá " + nome;
}

const somar = (a, b) => a + b; // Função arrow

// ------------------ ARRAYS ------------------
let frutas = ["maçã", "banana", "laranja"];
frutas.push("uva");      // Adiciona no final
frutas.pop();            // Remove último
frutas.shift();          // Remove primeiro
frutas.unshift("kiwi");  // Adiciona no início
frutas.includes("banana"); // true
frutas.indexOf("laranja"); // índice
frutas.length;           // tamanho
frutas.forEach(f => console.log(f)); // iteração

// ------------------ OBJETOS ------------------
let pessoa = {
    nome: "Carlos",
    idade: 30,
    falar: function () {
        console.log("Olá!");
    }
};
console.log(pessoa.nome);
pessoa.falar();

// ------------------ CLASSES ------------------
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    falar() {
        console.log(this.nome + " faz um som");
    }
}

let cachorro = new Animal("Dog");
cachorro.falar();

// ------------------ PROMISES ------------------
const promessa = new Promise((resolve, reject) => {
    let sucesso = true;
    if (sucesso) {
        resolve("Deu certo!");
    } else {
        reject("Deu erro!");
    }
});

promessa.then(mensagem => {
    console.log(mensagem);
}).catch(erro => {
    console.error(erro);
});

// ------------------ ASYNC / AWAIT ------------------
async function carregarDados() {
    try {
        let resultado = await promessa;
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
}

// ------------------ JSON ------------------
let jsonString = JSON.stringify(pessoa); // Objeto → JSON
let objetoNovo = JSON.parse(jsonString); // JSON → Objeto

// ------------------ LOCAL STORAGE ------------------
// Salvar
localStorage.setItem("nome", "Lucas");
// Recuperar
let nomeArmazen

// ------------------ MAP E FILTER ------------------
// Map (mapeia um array e retorna um novo array com base nos resultados de uma função)
let numeros = [1, 2, 3, 4, 5];
let quadrados = numeros.map(num => num * num); // [1, 4, 9, 16, 25]

// Filter (filtra um array com base em uma condição)
let pares = numeros.filter(num => num % 2 === 0); // [2, 4]

// ------------------ REDUCE ------------------
// Reduce (acumula um valor baseado em uma operação, geralmente usado para somar ou agrupar)
let soma = numeros.reduce((acc, num) => acc + num, 0); // 15 (acumulando os números)

// ------------------ DESTRUCTURING ------------------
// Destructuring (desestruturando objetos e arrays)
let pessoa = { nome: "João", idade: 30 };
let { nome, idade } = pessoa; // { nome: "João", idade: 30 }

// Para arrays
let numeros = [1, 2, 3];
let [primeiro, segundo, terceiro] = numeros; // primeiro = 1, segundo = 2, terceiro = 3

// ------------------ SPREAD OPERATOR ------------------
// Spread (espalha os itens de um objeto ou array em um novo array ou objeto)
let array1 = [1, 2, 3];
let array2 = [...array1, 4, 5]; // [1, 2, 3, 4, 5]

let obj1 = { nome: "Ana", idade: 25 };
let obj2 = { ...obj1, cidade: "São Paulo" }; // { nome: "Ana", idade: 25, cidade: "São Paulo" }

// ------------------ REST OPERATOR ------------------
// Rest (coleta múltiplos itens em um array ou objeto)
function somarTodos(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
let resultado = somarTodos(1, 2, 3, 4); // 10

// ------------------ TEMPLATE LITERALS ------------------
// Template literals (interpolação de variáveis dentro de strings)
let nome = "Carlos";
let saudacao = `Olá, meu nome é ${nome}!`; // Olá, meu nome é Carlos!

// ------------------ MÓDULOS ------------------
// Importar e Exportar módulos (exemplo de uso com ES6+)
import { saudacao } from './saudacao.js'; // Importa a função saudacao de um arquivo externo
export const idade = 30; // Exporta a constante idade

// ------------------ SETS E MAPS ------------------
// Sets (estruturas de dados que armazenam valores únicos)
let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(2); // Não será adicionado novamente, porque é um valor único
console.log(conjunto); // Set {1, 2}

// Maps (estruturas de dados chave-valor)
let mapa = new Map();
mapa.set("nome", "Lucas");
mapa.set("idade", 25);
console.log(mapa.get("nome")); // Lucas

// ------------------ FUNÇÕES DE ALTA ORDEM ------------------
// Funções de alta ordem (funções que recebem ou retornam outras funções)
function operacao(a, b, funcao) {
    return funcao(a, b);
}

let somaFunc = (a, b) => a + b;
let resultadoOperacao = operacao(3, 4, somaFunc); // 7


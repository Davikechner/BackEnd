import entradaDados from "readline-sync";

//-01 While
let perg = entradaDados.questionInt("Me de um numero de 1 a 10: ")
let cont = 1
while (cont <=10) {
    console.log(`${perg} x ${cont} = ${perg * cont}`)
    cont = cont + 1
}
console.log(" ")

//-02

let alunosNum = entradaDados.questionInt('digite o número de alunos da turma: ')
let contalun = 1;
let somaMedias = 0;
while (contalun<= alunosNum){
    console.log(`Aluno ${contalun}`);

    let contBimestre = 1;
    let somaNotas = 0;
    while (contBimestre <= 4) {
        let nota = entradaDados.questionInt(`informe sua nota do ${contBimestre} bimestre do aluno ${contalun}: `)
        somaNotas += nota;
        contBimestre = contBimestre + 1
    }
    let mediaAluno = somaNotas / 4;
    somaMedias +=mediaAluno;
    console.log(`Media do aluno ${contalun}: ${mediaAluno.toFixed(2)}`)
    contalun++;
}
let mediaGeralTurma = somaMedias/alunosNum;
console.log(`Media ge4ral da turma: ${mediaGeralTurma.toFixed(2)}`)
console.log(" ")

//-01 Do While

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = entradaDados.questionInt("Tente adivinhar o numero entre 1 e 100): ")
    if (palpite === numeroAleatorio) {
        console.log(`Parabens! voce acertou o numero realmente era ${numeroAleatorio}`)
    }
    else if (palpite < numeroAleatorio) {
        console.log("Digite um numero MAIOR") 
    }
    else {
        console.log("Digite um numero MENOR")
    }
}
while (palpite !== numeroAleatorio);
console.log(" ")

// -01 For
let anterior = 0;
let atual = 1;

console.log('----Sequencia de Fibonacci----')
console.log(anterior)
console.log(atual)

for (let i = 3; i <= 20; i++) {
    let proximo = anterior + atual;
    console.log(proximo)

    anterior = atual;
    atual = proximo
}
console.log(" ")

//-02

let nome = entradaDados.question(`Informe o nome da ${1}° pessoa: `)
let salario = entradaDados.questionInt(`Informe o salario de ${nome}: `)
let impostoRenda = 2

if (salario <= 2100) {
    impostoRenda = 0;    
}
else if (salario <= 2800) {
    impostoRenda = salario * 0.075;
}
else if (salario <= 3750) {
    impostoRenda = salario * 0.15;
}
else if (salario <= 4660) {
    impostoRenda = salario * 0.225;
}
else {
    impostoRenda = salario * 0.275;
}

console.log(`\n---Imposto de renda a ser pago----`);
console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed[2]}`)



//-01 Fon in e For of
const pessoa = {
    nome: "Davi",
    idade: 15,
    sexo: "M"
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

let cores = ["Azul", "Branco", "Verde", "Preto", "Roxo"]
for (const elemento of cores) {
    console.log("Cor:" + elemento)
}
// // //-01
import entradaDados from "readline-sync";


let dia_da_semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"]
let dias = entradaDados.question("Informe o numero da semanda: ")



switch (dias) {
    case dias = "0":
        console.log(dia_da_semana[0])
        break

    case dias = "1":
        console.log(dia_da_semana[1])
        break

    case dias = "2":
        console.log(dia_da_semana[2])
        break

    case dias = "3":
        console.log(dia_da_semana[3])
        break

    case dias = "4":
        console.log(dia_da_semana[4])
        break
    
    case dias = "5":
        console.log(dia_da_semana[5])
        break

    case dias = "6":
        console.log(dia_da_semana[6])
        break
}
console.log(" ")


//-02
let dia_do_mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let mes = entradaDados.question("Informe um numero de (0 a 11): ")

switch (mes) {
    case dias = "0":
        console.log(dia_do_mes[0])
        break

    case dias = "1":
        console.log(dia_do_mes[1])
        break

    case dias = "2":
        console.log(dia_do_mes[2])
        break

    case dias = "3":
        console.log(dia_do_mes[3])
        break

    case dias = "4":
        console.log(dia_do_mes[4])
        break
    
    case dias = "5":
        console.log(dia_do_mes[5])
        break

    case dias = "6":
        console.log(dia_do_mes[6])
        break

    case dias = "7":
        console.log(dia_do_mes[7])
        break

    case dias = "8":
        console.log(dia_do_mes[8])
        break

    case dias = "9":
        console.log(dia_do_mes[9])
        break

    case dias = "10":
        console.log(dia_do_mes[10])
        break

    case dias = "11":
        console.log(dia_do_mes[11])
        break

    case dias = "12":
        console.log(dia_do_mes[12])
            break
}
console.log(" ")


//-03

let a = entradaDados.questionFloat("Informe o primeira numero:  ")
let operacao = entradaDados.question("Informe a operação que deseja:  ")
let b = entradaDados.questionFloat("Informe o segundo numero:  ")

let divisao = [a / b]
let adicao = [a + b]
let multiplicao = [a * b]
let subtracao = [a - b]

switch(a,b,operacao){
    case a,b,operacao = "*":
        console.log("O resultado será igual a:",multiplicao)
        break
    
    case a,b,operacao = "-":
        console.log("O resultado será igual a:",subtracao)
        break

    case a,b,operacao = "+":
        console.log("O resultado será igual a:",adicao)
        break
        
    case a,b,operacao = "/":
        console.log("O resultado será igual a:",divisao)
        break

}
console.log(" ")


//-04


let salario = entradaDados.questionFloat("Informe o teu salario: ");
let perg = entradaDados.question("Informe a categoria (A, B, C ou D): ").toUpperCase();

switch(perg) {
    case "A":
        console.log("Seu salário atualizado é:", salario + (salario * 5 / 100));
        break;
    
    case "B":
        console.log("Seu salário atualizado é:", salario + (salario * 10 / 100));
        break;

    case "C":
        console.log("Seu salário atualizado é:", salario + (salario * 15 / 100));
        break;
        
    case "D":
        console.log("Seu salário atualizado é:", salario + (salario * 20 / 100));
        break;

    default:
        console.log("Categoria inválida. Use A, B, C ou D.");
        break;
}

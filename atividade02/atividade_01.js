//-01
function paraMaiuscula(texto) {
  return texto.toUpperCase();
}


//-02
function parOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

//-03
function somar(a, b) {
  return a + b;
}


//-04
function acrescentarPorcentagem(valor, porcentagem) {
  return valor + (valor * (porcentagem / 100));
}


//-05
function aplicarDesconto(valor, percentualDesconto) {
  return valor - (valor * (percentualDesconto / 100));
}

const produtos = [100, 200, 50];
const desconto = 10;

const valoresComDesconto = produtos.map(produto => aplicarDesconto(produto, desconto));
console.log(valoresComDesconto);


//-06
function areaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}


//-07
function celsiusParaFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}


//-08
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

//-09
function validarSenha(senha) {
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temEspecial = /[\W_]/.test(senha);
  return senha.length >= 8 && temMaiuscula && temMinuscula && temEspecial;
}


//-10
function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf[i]) * (10 - i);
  }

  let digito1 = (soma * 10) % 11;
  if (digito1 === 10) digito1 = 0;
  if (digito1 !== parseInt(cpf[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf[i]) * (11 - i);
  }

  let digito2 = (soma * 10) % 11;
  if (digito2 === 10) digito2 = 0;
  return digito2 === parseInt(cpf[10]);
}


//-11
function calcularInvestimento(capitalInicial, taxaJurosMensal, tempoMeses) {
  const montante = capitalInicial * Math.pow(1 + (taxaJurosMensal / 100), tempoMeses);
  return montante.toFixed(2);
}
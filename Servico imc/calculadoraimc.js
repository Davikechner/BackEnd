function efetuarCalculoImc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);
}

exports.efetuarCalculoImc = efetuarCalculoImc;
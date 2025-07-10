const express = require('express');
const app = express();
const calculaImc = require('./Servico imc/calculadoraimc');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;


    if (calculaImc.validarParametro(req.query.peso) && calculaImc.validarParametro(req.query.altura)) {
        let imc = calculaImc.efetuarCalculoImc(peso, altura);
        let status = calculaImc.retornarStatusIMC(imc);


        let json = { imc: imc, status: status };
        res.json(json);
    }

    else {
        res.status(400).json({"Erro" : "Peso ou altura invalida!"})
    }
        

});

app.listen(8080, () => {
    let data = new Date();
    console.log('servidor node iniciado em: ' + data)
});
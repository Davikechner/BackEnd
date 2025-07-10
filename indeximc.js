const express = require('express');
const app = express();
const calculaImc = require('./Servico imc/calculadoraimc');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calculaImc.efetuarCalculoImc(peso, altura);

    res.json({imc: imc});
});

app.listen(8080, () => {
    let data = new Date();
    console.log('servidor node iniciado em: ' + data)
});
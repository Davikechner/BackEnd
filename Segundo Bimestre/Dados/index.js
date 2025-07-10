import express from 'express';

const app = express();

app.get('/', (req, res) => {
    let data = new Date();
    res.json("Eu sou o Davi e tenho 15 year",data)

});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080");
});
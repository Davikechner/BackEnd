//-01
let apartamento1 = {
    quartos: 2,
    tipo: "Apartamento",
    endereco: "Avenida Principal, 456 - Centro.",
    andar: 7
}
console.log("Apartamento com",apartamento1.quartos,"quartos, localizado no",apartamento1.andar,"andar da",apartamento1.endereco)
console.log(" ")



//-02
let produtoEmbalado = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00,
}
console.log("O produto",produtoEmbalado.nome,",da categoria",produtoEmbalado.categoria,", pesando",produtoEmbalado.peso,"kg, está à venda por R$",produtoEmbalado.preco)
console.log(" ")



//-03
class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

    exibirInformacoes() {
        return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}`;
    }
}

const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
const apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");

console.log(casa.exibirInformacoes());
console.log(apartamento.exibirInformacoes());
console.log(" ")



//-04
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes1() {
        return `Carro da marca ${this.marca}, do modelo ${this.modelo} e do ano de ${this.ano}`;
    }

    exibirDetalhes2() {
        return `Motocicleta da marca ${this.marca}, do modelo ${this.modelo} e do ano de ${this.ano}`;
    }
}   

const carro = new Veiculo("Toyota", "Corola", "2022");
const motocicleta = new Veiculo("Honda", "CBR 600RR", "2021");
console.log(carro.exibirDetalhes1());
console.log(motocicleta.exibirDetalhes2());

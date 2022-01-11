console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);



console.log("Destinos possíveis:");
// console.log(savador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);


const idadeComprador = 17;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// Idade do comprador 


if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Não é maior de Idade e não posso vender");
}


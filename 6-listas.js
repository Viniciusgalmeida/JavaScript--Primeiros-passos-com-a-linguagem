console.log(`Trabalhando com listas`);
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) // adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); // (2,1) significa (posição dentro array começando do 0 , quantidade de elementos a serem deletados)
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); // imprimir uma posição específica dentro de uma lista


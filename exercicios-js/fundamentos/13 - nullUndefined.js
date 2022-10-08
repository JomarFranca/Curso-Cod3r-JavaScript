const a = { nome: "Teste" };
console.log("Primeira Impressão: ", a);
const b = a;
b.nome = "Opa";
console.log("Segunda Impressão: ", b);

let c = 3;
console.log("Primeira Impressão: ", c);
let d = c;
d++;
console.log("Segunda Impressão: ", d); //mudou o valor por causa que foi usado um valor primitivo!

let valor; // não inicializada / não definida
console.log(valor);

valor = null; // ausência de valor, sem armazenamento de valor na memória
console.log(valor);
// console.log(valor.toString()); //Error

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preço);
console.log(produto);

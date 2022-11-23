// Object.preventExtensions = você não congela como no função .freeze(), mas evita que o objeto se estenda.
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção',
});
console.log('Extensível: ', Object.isExtensible(produto));
produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal = você consegue alterar os objetos, porém não consegue excluir e nem adicionar
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 26;
console.log(pessoa);

// Object.freeze = ele representa o Selado + valores constantes

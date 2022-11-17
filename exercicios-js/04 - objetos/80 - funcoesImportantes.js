const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13,
};
console.log(Object.keys(pessoa)); // pega as chaves do arrays
console.log(Object.values(pessoa)); // pega os valores do arrays
console.log(Object.entries(pessoa)); // pega as entradas(chave/valor) do arrays

// usando o método Elemento
Object.entries(pessoa).forEach((e) => {
    console.log(`${e[0]}, ${e[1]}`);
});

// usando o método destruct
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019',
});

pessoa.dataDeNascimento = '01/01/2017';
console.log(pessoa.dataDeNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3, a: 4 };
const obj = Object.assign(dest, obj1, obj2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);

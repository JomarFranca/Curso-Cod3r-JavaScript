// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {};

// Armazenar em um Array
const array = [
    function (a, b) {
        return a + b;
    },
    fun1,
    fun2,
];
console.log(array[0](2, 3));

// Armazenar em um Objeto
const obj = {};
obj.falar = function () {
    return 'Falar';
};
console.log(obj.falar());

// Passar uma função como parâmetro
function run(fun) {
    fun();
}
run(function () {
    console.log('Executando...');
});

// Criar uma função que retorna/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    };
}
soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);

console.log(typeof Object);
console.log(typeof new Object()); //instanciei uma função

const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente()); //instanciei uma função

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto()); //instanciei uma classe

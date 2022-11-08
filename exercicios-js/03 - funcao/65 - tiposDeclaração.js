// function declaration (forma tradicional). Pode ser chamada antes da função declarada.
console.log(soma(3, 4));
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
};
console.log(sub(3, 4));

// named function expression (pouco usada)
const multi = function multi(x, y) {
    return x * y;
};
console.log(multi(3, 4));

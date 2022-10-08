let a = 7;
let b = 94;

console.log('O primeiro valor da Letra A é: ' + a);
console.log('O primeiro valor da Letra B é: ' + b);

// depois da troca .... a  passa a valer 94, e b passa a valer 7.

let temp = a;
a = b;
b = temp;

console.log('Agora o valor da Letra A é: ' + a);
console.log('Agora o valor da Letra B é: ' + b);

//Segunda forma de fazer

[a, b] = [b, a];
console.log(a);
console.log(b);

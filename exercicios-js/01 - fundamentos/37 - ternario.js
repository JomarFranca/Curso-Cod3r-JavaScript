const resultado = (nota) => (nota >= 7 ? 'Aprovado' : 'Reprovado');

console.log(resultado(7.1)); // maior
console.log(resultado(7.0)); // igual
console.log(resultado(6.9)); // menor

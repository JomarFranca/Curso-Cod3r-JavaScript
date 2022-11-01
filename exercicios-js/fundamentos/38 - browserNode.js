let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log('Ex. 01', a);
console.log('Ex. 02', global.b);
console.log('Ex. 03', this.c);
console.log('Ex. 04', module.exports.c);
console.log('Ex. 05', module.exports === this);
console.log('Ex. 06', module.exports);

// criando uma variável maluca: sem var e let!
abc = 3; // não faça isso em casa!!!
console.log(global.abc);

// module.exports = { e:456, f:false, g: 'teste' }

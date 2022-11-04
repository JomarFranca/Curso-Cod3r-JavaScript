function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2;
    const comprarTV50 = trab1 && trab2;
    const comprarTV32 = trab1 != trab2;
    // const comprarTV32 = !!(trab1 ^ trab2) // bitwise xor
    const manterSaudavel = !comprarSorvete; // operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

/* 
Operadores E (&&), são True quando as duas condições forem True
v e v = v
v e f = f
f e ? = f

Operadores OU (||), são True quando uma das duas condições forem True
v ou ? = v
f ou v = v
f ou f = f

Operadores XOR (), são True quando as duas condições forem diferentes
v xor v = f
v xor f = v
f xor v = v
f xor f = f

Negação lógica (!):
!v = f
!f = v
*/

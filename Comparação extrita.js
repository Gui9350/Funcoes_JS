////////////// COMPARAÇÃO EXTRITA DE VALORES (===) ////////////////
const valorasercomparado1 = 24;
const valorasercomparado2 = 24;

function comparaçãoDeValores(valorasercomparado1, valorasercomparado2) {
  if (valorasercomparado1 === valorasercomparado2) {
    return `Os valores são iguais`;
  } else {
    return `Os valores são diferentes`;
  }
}
console.log(comparaçãoDeValores(valorasercomparado1, valorasercomparado2));

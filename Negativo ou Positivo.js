///////////// COMPARAÇÃO NEGATIVO OU POSITIVO ////////////////

var dado1;

function comparacaoNegativoOuPositivo(dado1) {
  if (dado1 > 0) {
    return `Positivio`;
  } else {
    return `Negativo`;
  }
}
console.log(comparacaoNegativoOuPositivo((dado1 = 25)));

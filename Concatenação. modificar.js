/*------Função de Concatenação------*/

var palavra1;
var palavra2;
var palavra3;
var palavra4;

// Função que concatena quatro palavras sem espaços entre elas

function concatenarpalavras(palavra1, palavra2, palavra3, palavra4) {
  return [palavra1 + palavra2 + palavra3 + palavra4];
}
console.log(
  concatenarpalavras(
    (palavra1 = "eu"),
    (palavra2 = "sou"),
    (palavra3 = "a"),
    (palavra4 = "lei")
  )
);

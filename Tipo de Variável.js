var variavel = 10;

function verificarotipodavariavel(variavel) {
  var resultado =
    typeof variavel == "string"
      ? "é uma frase"
      : typeof variavel == "number"
      ? "é um numero"
      : typeof variavel == "boolean"
      ? "é um valor booleano"
      : "Não é tipo nenhum";
  return resultado;
}

console.log(verificarotipodavariavel(variavel));

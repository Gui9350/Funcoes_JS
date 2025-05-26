////////////// CONVERTENDO NÚMERO PARA STRING ////////////////

const conversao = 24;
function conversaoDeNumeroParaStr(conversao) {
  return typeof (conversao + "");
}
console.log(conversaoDeNumeroParaStr(conversao));

////////////// CONVERTENDO STRING PARA NÚMERO ////////////////

const conversao2 = "24";
function conversaoDeStrParaNumero(conversao2) {
  return typeof Number(conversao2);
}
console.log(conversaoDeStrParaNumero(conversao2));

////////////// CONVERTENDO BOOLEANO PARA STRING ////////////////

const conversao3 = true;
function conversaoDeBooleanParaStr(conversao3) {
  return typeof String(conversao3);
}
console.log(conversaoDeBooleanParaStr(conversao3));

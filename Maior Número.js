/* Função que recebe dois números e retorna o maior deles.*/

var num1 = 20;
var num2 = 10;

function maiornumero(num1, num2) {
  if (num1 > num2) {
    return `O número ${num1} é maior que o número ${num2}`;
  }
  if (num1 < num2) {
    return `O número ${num1} é menor que o número ${num2}`;
  }
  if (num1 == num2) {
    return `Ambos são iguais a ${(num1, num2)}`;
  }
}
console.log(maiornumero(num1, num2));

var numeroasermultiplicado = 7;

function tabuada(numeroasermultiplicado) {
  let resultado = "";
  for (let contador = 0; contador <= 11; contador++) {
    resultado += `${contador} x ${numeroasermultiplicado} = ${
      contador * numeroasermultiplicado
    } `;
  }
  return resultado; // só pode ser executado uma vez
}
console.log(tabuada(numeroasermultiplicado));

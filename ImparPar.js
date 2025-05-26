var numeroaserverificado = 14;

function Imparpar(nnumeroaserverificado) {
  if (numeroaserverificado % 2 == 0) {
    return "Numero é par";
  }
  if (numeroaserverificado % 2 == 1) {
    return "Numero é impar";
  }
}
console.log(Imparpar(numeroaserverificado));

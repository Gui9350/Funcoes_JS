/* Função para gerar uma lista de números aleatórios entre dois valores 
Esta função recebe dois parâmetros: o valor mínimo e o valor máximo.*/

function gerandorDeNumerosAleatorios(min, max) {
  min = Math.ceil(min); //arredondando para cima com Math.ceil().
  max = Math.floor(max); //arredondando para baixo com Math.floor().
  let listaDeNumerosAleatorios = [];

  /* A função utiliza um loop for para gerar 10 números aleatórios,
cada um calculado com a fórmula Math.random() multiplicada pelo intervalo */

  for (let i = 0; i < 10; i++) {
    listaDeNumerosAleatorios.push(
      Math.floor(Math.random() * (max - min + 1) + 1)
    );
  }
  return listaDeNumerosAleatorios;
}

console.log(gerandorDeNumerosAleatorios(1, 100));

const matriz = [
  ["A", "D"],
  ["B", "E"],
  ["C", "F"],
];

function transpose(matriz) {
  let novaMatriz = [...matriz];
  const tamanho = matriz.length;
  for (let linha = 0; linha < tamanho; linha++) {
    for (let coluna = 0; coluna < tamanho; coluna++) {
      const armazenar = novaMatriz[linha][coluna];
      novaMatriz[linha][coluna] = novaMatriz[coluna][linha];
      novaMatriz[coluna][linha] = armazenar;
    }
  }

  return novaMatriz;
}

console.log(transpose(matriz));

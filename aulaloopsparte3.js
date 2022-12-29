//continue and break

//break is used to stop the loop

// O comando “break” serve para encerrar a leitura. O break é um comando que podemos utilizar
//quando queremos parar/encerrar o laço de repetição na hora.
//A instrução break interrompe o laço e continua executando o código após o loop (se houver).
//A instrução break pode ser utilizada para pular de um loop ou de um switch.
let carros = ["BMW", "Volvo", "Saab", "Ford"];

list: {
  console.log(carros[0]);
  console.log(carros[1]);
  break list;
  console.log(carros[2]);
  console.log(carros[3]);
}

//continue is used to skip the current iteration
// Com este comando, é possível iniciar a próxima repetição do loop.
// A instrução continue interrompe uma iteração (no laço de repetição),
// se uma condição especificada for atendida, e continua com a próxima iteração no laço.

for (let i = 1; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("O número atual é: " + i);
}
// Com a instrução continue, você poderá utilizá-la para apenas ignorar  uma iteração de loop.

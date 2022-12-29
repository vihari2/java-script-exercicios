//While is a loop that will continue to run until the condition is false
//While não precisa de um contador, ele vai rodar enquanto a condição for verdadeira

let rep = 1; //valor inicial de um contador
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️🏋️‍♂️🏋️‍♂️`);
  rep++; //atualiza o contador a cada iteração do loop
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

//quando o dado for 6, o loop vai parar

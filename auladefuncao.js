// // Function declaration
function meuNome() {
  //essa função não retorna nada, apenas registra algo no console.
  // não tem nada a ver com retorno de valor, apenas imprime uma mensagem aqui.
  console.log("Meu nome é João");
}

//callign / running / invoking function

meuNome(); //isso aqui não produz um valor, pois não retornamos nada na função
meuNome();
meuNome();
meuNome();

// Função criada para ser usada várias vezes, sem precisar repetir o código,
// e que funciona para qualquer número de maçãs e laranjas.
function fruitProcessor(apples, oranges) {
  // apples e oranges são parâmetros
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice; //return é uma palavra reservada, não pode ser usada como variável.
}

// viariavel criada para armanezar o valor retornado pela função
const appleOrangeJuice = fruitProcessor(5, 4); //argumentos são os valores que passamos para a função.
//chamada da função com argumentos
console.log(appleOrangeJuice);

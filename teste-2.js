// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
// a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva
// um programa na linguagem que desejar onde, informado um número, ele calcule a sequência
// de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function includesInFibb(number) {
  if (number === 0) {
    return true;
  }

  let nextNum = 0;
  let lastNum = 1;

  for (; number >= nextNum; ) {
    const temp = nextNum;
    nextNum += lastNum;
    lastNum = temp;

    if (nextNum === number) {
      return true;
    }
  }

  return false;
}

function logIncludesInFibb(number) {
  const includes = includesInFibb(number);

  const affirmation = includes ? "pertence" : "não pertence";

  const message = `O número ${number} ${affirmation} a sequência de Fibonacci`;

  console.log(message);
}

if (process.env.NODE_ENV !== "TEST") {
  logIncludesInFibb(2);
  logIncludesInFibb(3);
  logIncludesInFibb(4);
  logIncludesInFibb(5);
  logIncludesInFibb(8);
  logIncludesInFibb(9);
  logIncludesInFibb(11);
  logIncludesInFibb(14);
}

module.exports = includesInFibb;

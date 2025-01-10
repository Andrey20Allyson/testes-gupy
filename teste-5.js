// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function myReverseString(str) {
  const arr = Array.from(str);
  const len = arr.length;

  for (let index = 0; index < len / 2; index++) {
    const reverseIndex = len - index - 1;

    const left = arr[index];
    const right = arr[reverseIndex];

    arr[index] = right;
    arr[reverseIndex] = left;
  }

  return arr.join("");
}

console.log(myReverseString("ola mundo"));
console.log(myReverseString("ola mundo2"));
console.log(myReverseString("ola mundo3"));
console.log(myReverseString("1234"));
console.log(myReverseString("12345"));

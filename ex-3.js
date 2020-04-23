/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var number = 600851475143;

primeFactors = [];

//ENCONTRAR DIVISORES INTEIROS E COLOCAR NO ARRAY primeFactors
var i;
for (i = 0; i < 1000000; i++) {
  if (number % i == 0) primeFactors.push(i);
}

//DIVIDED THE number TO BE EASIER TO WORK WITH
firstPrimeFactors = primeFactors.map((item) => number / item);

var usefulNumber = firstPrimeFactors[1];

const shortNumber = number / usefulNumber;

var i;
for (i = 0; i <= 486847; i++) {
  if (shortNumber % i == 0) primeFactors.push(i);
}

uniqueSet = new Set(primeFactors);
const finalArray = [...uniqueSet];

primeArray = [];

//FUNÇÃO PARA CHECAR SE É PRIMO
function checkArray(n) {
  tempArray = [];
  var i;
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      tempArray.push(i);
    }
  }
  if (tempArray.length <= 2) {
    primeArray.push(tempArray[tempArray.length - 1]);
  }
}

finalArray.map((item) => checkArray(item));

console.log(`O maior fator primo é ${primeArray[primeArray.length - 1]}`);

/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number? */

//CHECK IF PRIME FUNCTION
function checkIfPrime(item) {
  if (item === 2) {
    return true;
  }
  if (item === 1 || item % 2 === 0) {
    return false;
  }
  var ceil = Math.ceil(Math.sqrt(item));
  for (var i = 3; i <= ceil; i += 2) {
    if (item % i === 0) {
      return false;
    }
  }
  return true;
}

primeNumbers = [];

//PRIME NUMBERS ARRAY CREATION
var i;
for (i = 1; i < 1000000; i++) {
  if (primeNumbers.length < 10002) {
    if (checkIfPrime(i)) primeNumbers.push(i);
  }
}

//REVERSE THE ARRAY AND PRINT THE HIGHER NUMBER
reversedArr = primeNumbers.reverse();
console.log(reversedArr[0]);

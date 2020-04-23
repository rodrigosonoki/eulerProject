/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number? */

//CHECK IF PRIME FUNCTION
function checkIfPrime(n) {
  tempArray = [];
  var i;
  for (i = 0; i <= n; i++) {
    if (n % i == 0) {
      tempArray.push(i);
    }
  }
  if (tempArray.length <= 2) return true;
  return false;
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

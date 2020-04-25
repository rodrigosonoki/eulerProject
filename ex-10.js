//CHECK IF PRIME
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

primeNumbers = [2];

for (i = 3; i <= 2000000; i += 2) {
  if (checkIfPrime(i)) primeNumbers.push(i);
}

console.log(primeNumbers.reduce((a, b) => a + b, 0));

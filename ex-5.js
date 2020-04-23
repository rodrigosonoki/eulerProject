/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

//CHECAR SE O VALOR É DIVISÍVEL POR TODOS OS ELEMENTOS DO ARRAY numbers
function checkIf(n) {
  var i;
  for (i = 0; i < 20; i++) {
    if (n % numbers[i] !== 0) return false;
  }
  return true;
}

//LOOP PARA CHECAR QUAL O MENOR NÚMERO DIVISÍVEL POR TODOS OS ELEMENTOS DO ARRAY numbers
var i;
for (i = 1; ; i++) {
  if (checkIf(i)) return console.log(i);
}

/* The sum of the squares of the first ten natural numbers is,
12+22+...+102=385
The square of the sum of the first ten natural numbers is,
(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

(1 + 2 + 3 + ... + 100)**2 - 1**2 + 2**2 + ... + 100**2 */

a = [];

//CREATE AN ARRAY WITH THE FIRST 100 NUMBERS
var i;
for (i = 1; i <= 100; i++) {
  a.push(i);
}

//SQUARE OF THE SUM
sumA = Math.pow(
  a.reduce((a, b) => a + b, 0),
  2
);

b = [];

//CREATE AN ARRAY WITH THE SQUARES OF THE FIRST 100 NUMBERS
var i;
for (i = 1; i <= 100; i++) {
  b.push(Math.pow(i, 2));
}

//SUM
sumB = b.reduce((a, b) => a + b, 0);

//DIFFERENCE
console.log(sumA - sumB);

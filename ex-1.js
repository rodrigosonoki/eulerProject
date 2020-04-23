// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

multipleOf5 = [];
multipleOf3 = [];

//GERAR ARRAY DE MÚLTIPLOS DE 5
var i;
for (i = 0; i < 1000; i++) {
  if (i % 5 == 0) {
    multipleOf5.push(i);
  }
}

//GERAR ARRAY DE MÚLTIPLUS DE 3
var i;
for (i = 0; i < 1000; i++) {
  if (i % 3 == 0) {
    multipleOf3.push(i);
  }
}

//UNIR AS DUAS ARRAYS
const totalArray = [...multipleOf3, ...multipleOf5];

//REMOVER ELEMENTOS DUPLICADOS
const uniqueSet = new Set(totalArray);
const finalArray = [...uniqueSet];

//SOMAR O VALOR TOTAL
const totalSum = finalArray.reduce((a, b) => a + b, 0);

console.log(totalSum);

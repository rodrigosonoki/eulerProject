/* A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

//CHECAR SE SÃO PALINDROMOS

function compareStrings(a, b) {
  if (a == b) return true;
  return false;
}

//ENCONTRAR O MAIOR DIVISOR INTEIRO
function regression(n) {
  var i;
  for (i = 999; i >= 100; i--) {
    if (n % i == 0) {
      return n / i;
    }
  }
}

palindromes = [];

//CRIAR ARRAY DE PALÍNDROMOS
var i;
for (i = 100 * 100; i <= 999 * 999; i++) {
  var str = i.toString(10);
  var strReversed = i.toString(10).split("").reverse().join("");
  if (compareStrings(str, strReversed)) palindromes.push(str);
}

palindromes.reverse();

//ENCONTRAR O MAIOR PALÍNDROMO COM DIVISORES INTEIROS DE 3 DÍGITOS
var i;
for (i = 0; i <= palindromes[palindromes.length - 1]; i++) {
  if (typeof regression(palindromes[i]) !== "undefined") {
    if (
      regression(palindromes[i]).toString(10).split("").length == 3 &&
      palindromes[i] / regression(palindromes[i])
    ) {
      var div1 = regression(palindromes[i]);
      var div2 = palindromes[i] / regression(palindromes[i]);
      var result = palindromes[i];
      console.log(
        `O maior palindromo formado por 2 números de 3 dígitos é ${div1} * ${div2} = ${result}`
      );
      return true;
    }
  }
}

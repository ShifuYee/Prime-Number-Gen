'use strict';
// const output = {
//   primes: [],
//   start: 2,
//   lastInput: 2
// };
const Primes = [];
let LastInput = 2;

function isNumeric(value) {
  return /^\d+$/.test(value);
}

const findPrimes = function(num) {
  const primes = [];
  for (let index = 0; index < num + 1; ++index) {
    primes.push(true);
  }
  let p = 2;
  while (p * p <= num) {
    if (primes[p] === true) {
      for (let i = p * 2; i < num + 1; i += p) {
        primes[i] = false;
      }
    }
    ++p;
  }
  for (let j = LastInput; j < num; ++j) {
    if (primes[j]) {
      Primes.push(j);
    }
  }
  LastInput = num;
}

function calcPrimeNumbers (number) {
  if (number < 1 || number > 10000 || !isNumeric(number)) {
    return 'Whoops! That is not a valid number.';
  }
  findPrimes(number);
  return Primes;
}

module.exports = { calcPrimeNumbers };

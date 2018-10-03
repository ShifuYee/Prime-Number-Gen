'use strict';
const data = {
  primes: [],
  start: 2,
  lastInput: 2
};

function isNumeric(value) {
  return /^\d+$/.test(value);
}

const findPrimes = function(num, output) {
  const primes = [];
  for (let index = 0; index < num + 1; ++index) {
    primes.push(true);
  }
  let p = output.start;
  while (p * p <= num) {
    if (primes[p] === true) {
      for (let i = p * 2; i < num + 1; i += p) {
        primes[i] = false;
      }
    }
    output.start = p;
    ++p;
  }
  for (let j = output.lastInput; j < num; ++j) {
    if (primes[j]) {
      output.primes.push(j);
    }
  }
  output.lastInput = num;
}

function calcPrimeNumbers (number) {
  if (number < 1 || number > 10000 || !isNumeric(number)) {
    throw new Error('Whoops! That is not a valid number.');
  }
  findPrimes(number, data);
  return data.primes;
}

module.exports = { calcPrimeNumbers };

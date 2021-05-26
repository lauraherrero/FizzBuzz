// Tengo una lista de arrays. En cada uno me dan información de 2 tipos:
// - La cantidad mínima y máxima que debe estar presente una letra específica.
// - La serie de números que conforman la contraseña.
// Averiguar del listado aquellos que cumplen las especificaciones

/* eslint-disable */
const fs = require('fs');
const path = require('path');

const removeLastElement = (array) => array.slice(0, -1);
const input = removeLastElement(fs.readFileSync(path.join(__dirname, 'inputDay2.txt')).toString().split('\n'));

const dayTwo = (input) => {
  let validPassCount = 0;

  for (let i = 0; i < input.length; i++) {
    const [numbers, letterWithColon, password] = input[i].split(' ');
    const [min, max] = numbers.split('-');
    const letter = letterWithColon[0];
    const numOfOccurrences = (password.match(new RegExp(letter, 'g')) || []).length;

    if (numOfOccurrences >= min && numOfOccurrences <= max) {
      validPassCount++;
    }
  }

  return validPassCount;
};

console.log(dayTwo(input)); // eslint-disable-line no-console

const dayTwoPartTwo = (input) => {
  let validPassCountTwo = 0;

  for (let i = 0; i < input.length; i++) {
    const [numbers, letterWithColon, password] = input[i].split(' ');
    const [min, max] = numbers.split('-').map((x) => x - 1);
    const letter = letterWithColon[0];
    if (password[min] === letter ^ password[max] === letter) {
      validPassCountTwo += 1;
    }
  }

  return validPassCountTwo;
};
console.log(dayTwoPartTwo(input)); // eslint-disable-line no-console

// Probar con utf-8, necesitamos toString
// Resolver path relativo, __dirname

module.exports = { dayTwo, dayTwoPartTwo };

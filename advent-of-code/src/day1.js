import input from './input-day-1.js';

const adventOfCode = (array) => { // eslint-disable-line consistent-return
  for (let index = 0; index < array.length; index++) {
    for (let indexTwo = index + 1; indexTwo < array.length; indexTwo++) {
      if (parseInt(array[index]) + parseInt(array[indexTwo]) === 2020) {
        return parseInt(array[index]) * parseInt(array[indexTwo]);
      }
    }
  }
};

console.log(adventOfCode(input)); // eslint-disable-line no-console

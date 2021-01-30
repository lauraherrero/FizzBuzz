const number = require('./number');

const fizz = 'Fizz';
const buzz = 'Buzz';

function fizzBuzz(num) {
  if (number.isMultipleofThree(num) && number.isMultipleofFive(num)) {
    return fizz + buzz;
  } if (number.isMultipleofThree(num)) {
    return fizz;
  } if (number.isMultipleofFive(num)) {
    return buzz;
  }
  return num;
}

module.exports = fizzBuzz;

const numberUtils = require('./numberUtils');

const fizz = 'Fizz';
const buzz = 'Buzz';

function fizzBuzz(number) {
  if (numberUtils.isMultipleOf(number, 3) && numberUtils.isMultipleOf(number, 5)) {
    return fizz + buzz;
  } if (numberUtils.isMultipleOf(number, 3)) {
    return fizz;
  } if (numberUtils.isMultipleOf(number, 5)) {
    return buzz;
  }
  return number;
}

module.exports = fizzBuzz;

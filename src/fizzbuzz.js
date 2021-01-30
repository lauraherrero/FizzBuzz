const number = require('./number');

function fizzBuzz(num) {
  if(number.isMultipleofThree(num) && number.isMultipleofFive(num)) {
    return fizz + buzz;
  } else if(number.isMultipleofThree(num)) {
    return fizz;
  } else if(number.isMultipleofFive(num)) {
    return buzz;
  }
};

const fizz = 'Fizz';
const buzz = 'Buzz';

module.exports = fizzBuzz;

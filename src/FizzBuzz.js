function fizzBuzz(num) {
  if(isMultipleofThree(num) && isMultipleofFive(num)) {
    return fizz + buzz;
  } else if(isMultipleofThree(num)) {
    return fizz;
  } else if(isMultipleofFive(num)) {
    return buzz;
  }
};

const fizz = 'Fizz';
const buzz = 'Buzz';

function isMultipleofThree(num) {
  return num % 3 == 0
};

function isMultipleofFive(num) {
  return num % 5 == 0
};

module.exports = fizzBuzz;
function isMultipleofThree(num) {
  return num % 3 == 0
};

function isMultipleofFive(num) {
  return num % 5 == 0
};

module.exports = {
  isMultipleofThree: isMultipleofThree,
  isMultipleofFive: isMultipleofFive
};
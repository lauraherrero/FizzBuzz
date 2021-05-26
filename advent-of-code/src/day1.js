const adventOfCode = (array) => { // eslint-disable-line consistent-return
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (parseInt(array[i]) + parseInt(array[j]) === 2020) {
        return parseInt(array[i]) * parseInt(array[j]);
      }
    }
  }
};

// console.log(adventOfCode(input)); // eslint-disable-line no-console

const adventOfCodePartTwo = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = i + 1; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 2020) {
          return array[i] * array[j] * array[k];
        }
      }
    }
  } return array;
};

// console.log(adventOfCodePartTwo(input.map((item) => parseInt(item)))); // eslint-disable-line no-console

module.exports = { adventOfCode, adventOfCodePartTwo };

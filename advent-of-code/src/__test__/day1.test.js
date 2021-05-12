const { adventOfCode, adventOfCodePartTwo } = require('../day1');
const { input } = require('../input-day-1');

describe('adventOfCode', () => {
  test('two number sum 2020 return the multiplication', () => {
    const input = [
      '1000',
      '1020',
    ]
    expect(adventOfCode(input)).toBe(1000 * 1020);
  });

  test('two number sum 2020 return the multiplication', () => {
    const input = [
      '555',
      '1000',
      '1020',
    ]
    expect(adventOfCode(input)).toBe(1000 * 1020);
  });
});

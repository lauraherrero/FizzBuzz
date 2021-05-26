const { adventOfCode } = require('../day1');

describe('adventOfCode', () => {
  test('two number sum 2020 return the multiplication', () => {
    const input = [
      '1000',
      '1020',
    ];
    expect(adventOfCode(input)).toBe(1000 * 1020);
  });

  test('two number sum 2020 return the multiplication', () => {
    const input = [
      '555',
      '1000',
      '1020',
    ];
    expect(adventOfCode(input)).toBe(1000 * 1020);
  });
});

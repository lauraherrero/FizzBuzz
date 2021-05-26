const { dayTwo } = require('../day2');

describe('day2', () => {
  test('should return 2 valid passwords', () => {
    const input = [
      '1-3 a: abcde',
      '1-3 b: cdefg',
      '2-9 c: ccccccccc',
    ];
    expect(dayTwo(input)).toBe(2);
  });
});

const { fakestExpect, fakestIt } = require('./fakest');

describe('expect', () => {
  test('when actual and expeted are the same value does not throw', () => {
    expect(() => {
      fakestExpect(1).toBe(1);
    }).not.toThrow();

    expect(() => {
      fakestExpect('hi').toBe('hi');
    }).not.toThrow();
  });

  test('when actual and expeted are different values throw', () => {
    expect(() => {
      fakestExpect(1).toBe(2);
    }).toThrow();

    expect(() => {
      fakestExpect('hi').toBe('bye');
    }).toThrow();
  });
});

describe('it', () => {
  test('the callback is invoke', () => {
    const callback = jest.fn();

    fakestIt('description', callback);
    expect(callback.mock.calls.length).toBe(1);
  });
});

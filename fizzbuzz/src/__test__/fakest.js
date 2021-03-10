function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is different from ${expected}`);
      }
    },
  };
}

function it(_description, callback) {
  return callback();
}
const describe = it;
const test = it;

module.exports = {
  fakestExpect: expect,
  fakestIt: it,
  describe,
  test,
};

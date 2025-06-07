const { createPrefixSum, rangeSum } = require('../practice/range_sum');

test('it should return the sum of certain range', ()=> {
    const arr = [5, 4, 3, 2, 6, 1];
    const prefix = createPrefixSum(arr);
    const range = [2,3];

    expect(rangeSum(range, prefix)).toBe(5);
});



test('rangeSum returns correct sum for range [2, 3]', () => {
  const arr = [5, 4, 7, 8, 6, 1];
  const prefix = createPrefixSum(arr);
  const range = [1, 4];
  expect(rangeSum(range, prefix)).toBe(25); // 3 + 2 = 5
});
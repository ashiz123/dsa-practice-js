const sumPairToTarget = require('../practice/twoPointers/sum_pair');


test('it should return boolean', () => {
    const arr = [-2, -3, 1, -1, 1, 2];
    const target = -5;

    expect(sumPairToTarget(arr, target)).toBe(true);

})
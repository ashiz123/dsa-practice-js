import binarySearchIteration from '../../practice/testingFunctions/binary_search_iteration';

describe('check binary search using iteration', () => {
    it('should display index of array', () => {
        expect(binarySearchIteration([2,3,4,5], 3)).toBe(1);
    })

    it('should display -1 if no item found in array', () => {
        expect(binarySearchIteration([4, 5,6, 7,8], 2)).toBe(-1);
    })
})
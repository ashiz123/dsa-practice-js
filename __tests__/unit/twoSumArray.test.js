import twoSumArray from '../../practice/testingFunctions/twoSumArray';


describe('two sum array', () => {

    it("should display the index of array that make sum less than target", () => {
        expect(twoSumArray([1,3,4,5], 9)).toEqual([1,3,4])
    })
})
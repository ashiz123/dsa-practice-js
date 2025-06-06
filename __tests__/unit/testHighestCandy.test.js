import highestCandies from "../../practice/testingFunctions/candies";


describe('add extra candies makes the highest candies', () => {


    test('make index 0 and 1 as highest candies if extra candies added', () => {
        expect(highestCandies([3 , 5, 1, 1], 2)).toEqual([true, true, false, false]);
    })
})
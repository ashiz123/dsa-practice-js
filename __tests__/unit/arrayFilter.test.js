import arrayFilter from '../../practice/testingFunctions/arrayFilter';


describe('Checking the number is in array', () => {
    it('checks number in array', () => {
        expect(arrayFilter([1, 2, 3], 3)).toBe(true);
    })

    it('checks number not in array', () => {
        expect(arrayFilter([1,2,3], 4)).toBe(false);
    } )


})
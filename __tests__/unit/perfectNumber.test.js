import perfectNumber from "../../practice/testingFunctions/perfectNumber";

describe('test weather the number is perfect or not', () => {
    it('should display perfect number', () => {
        expect(perfectNumber(6)).toBe('perfect number');
    })
})
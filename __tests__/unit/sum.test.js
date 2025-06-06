import sum from '../../practice/testingFunctions/sum';


describe('check sum works', () => {
    test('adding 2 even numbers result even number', () => {
        expect(sum(2,2)).toBe(4)
    });

    test('adding 2 positive number should not result 0', () => {
        expect(sum(4,5)).not.toBe(0);
    })
})
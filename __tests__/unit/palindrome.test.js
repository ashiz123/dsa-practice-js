import checkPalindrome from '../../practice/palindrome';


describe('check palindrome or not', () => {
    it('should return  the same while reversing the character', () => {
        expect(checkPalindrome('tat')).toBe(true);
    })
})
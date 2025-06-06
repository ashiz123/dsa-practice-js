import removeNodeFromEnd from "../../practice/testingFunctions/removeNodeFromEnd";


describe('remove node from end', () => {
    it('should reverse the given array' , () => {
        expect(removeNodeFromEnd([1,2,3, 4, 6], 2)).toEqual([1, 2, 3, 6]);
    });


})
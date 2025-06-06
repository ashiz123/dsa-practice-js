import productOfArray from "../../practice/product_array_except_itself";


describe('get product of array except self index', () => {
    it('give the product of array', () => {
        expect(productOfArray([1,2,3])).toEqual([6, 3, 2])
    })
})
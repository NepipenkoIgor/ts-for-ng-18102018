import { ex1 as typeEx1, getUnique, isInArray, summator, toMatrix } from './homework';

describe('Is in array method', () => {

    /*
     * isInArray tests
     */
    it('isInArray: "passed \'not in array arg\', expected FALSE" ', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
    });

    it('isInArray: "passed not compare by arg types, expected FALSE" ', () => {
        expect(isInArray(['1', 2, 3], 1, 2, 3)).toBeFalsy();
    });

    it('isInArray "expected FALSE - >second args not passed"', () => {
        expect(isInArray(['1', 2, 3])).toBeFalsy();
    });

    it('isInArray "passed empty arr [] , expected FALSE - no args to compare"', () => {
        expect(isInArray([])).toBeFalsy();
    });

    it('isInArray "passed [1,2,3], [1,2,3] expceted truthy"', () => {
        expect(isInArray([1, 2, 3], 1, 2, 3)).toBeTruthy();
    });

    /*
     * summator tests
     */
    it('summtor: "passed 1, 2 , 2  expected equal 5 ', () => {
        expect(summator(1, 2, 2)).toEqual(5);
    });

    it('summtor: "passed 1, \'2\', 2, expected equal 5 ', () => {
        expect(summator(1, '2', 2)).toEqual(5);
    });

    it('summtor: "expected TRUE - 1 + 0 + 2" = 3 ', () => {
        expect(summator(1, 0, 2)).toEqual(3);
    });

    it('summtor: "passed: 1, \'0\', 2", expected equal: 3 ', () => {
        expect(summator(1, '0', 2)).toEqual(3);
    });

    it('summtor: "passed no args, expected equal: 0 ', () => {
        expect(summator()).toEqual(0);
    });

    it('summtor: "passed \'some string 1\' = 3, expected 3', () => {
        expect(summator('some string 1', 3)).toEqual(3);
    });

    it('summtor: "passed: \'1.01\', 3  expected: 4.01 ', () => {
        expect(summator('1.01', 3)).toEqual(4.01);
    });

    /*
     * getUnique tests
     */
    it('getUnique: "expected SUCCESS: passed \'NO ARGS\', because no args = []', () => {
        expect(getUnique()).toEqual([]);
    });

    it('getUnique: expected SUCCESS', () => {
        const arrExpected: typeEx1[] = [1, 3, false, 'str1', true, '', 0];
        expect(getUnique(1, 3, false, false, 'str1', true, 'str1', '', '', 0, 0)).toEqual(arrExpected);
    });

    it('toMatrix:  [],0 = []', () => {
        const arrInput: typeEx1[] = [];
        const rowSize: number = 0;
        const arrOutput: typeEx1[][] = [];
        expect(toMatrix(arrInput, rowSize)).toEqual(arrOutput);
    });

    it('toMatrix:  expected equal ', () => {
        const arrInput: typeEx1[] = [1, 3, false, 'str1', true, '', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const rowSize: number = 4;
        const arrOutput: typeEx1[][] = [[1, 3, false, 'str1'], [true, '', 0, 1], [2, 3, 4, 5], [6, 7, 8, 9]];
        expect(toMatrix(arrInput, rowSize)).toEqual(arrOutput);
    });


});

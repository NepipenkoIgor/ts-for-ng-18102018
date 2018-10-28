import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Is in array method', () => {
    it('isInArray should return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
    });
    it('isInArray should return true', () => {
        expect(isInArray([1, 2, 3, 'se', false], 1, 'se', false)).toBeTruthy();
    });
});

describe('summator method', () => {
    it('summator should return number', () => {
        expect(summator(1, 2, 4, 5)).toBe(12);
    });
    it('summator without parameters should return 0', () => {
        expect(summator()).toBe(0);
    });
    it('summator should return string', () => {
        expect(summator('se', 'cr', 'et')).toBe('secret');
    });
    it('summator should return error', () => {
        expect(() => { summator('se', 'cr', 1); }).toThrow();
    });
    it('summator should return error', () => {
        expect(() => { summator(3, 'se', 'cr', 1); }).toThrow();
    });
});

describe('getUnique method', () => {
    it('getUnique should return unique array', () => {
        expect(getUnique(1, 2, 4, 4, 5, 1, false, 'asd')).toEqual([1, 2, 4, 5, false, 'asd']);
    });
});

describe('toMatrix method', () => {
    it('toMatrix should return matrix', () => {
        expect(toMatrix([6, 23, 8, 'asf', true, 3, 1, 'gf', 6, 2], 3))
            .toEqual([[6, 23, 8], ['asf', true, 3], [1, 'gf', 6], [2]]);
    });
});

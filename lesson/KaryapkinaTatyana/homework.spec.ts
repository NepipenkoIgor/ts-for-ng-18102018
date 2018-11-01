import { isInArray, summator, getUnique, toMatrix } from './homework';

describe('function isInArray', () => {
    it('isInArray should return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
        expect(isInArray([1, 2, 3], 1, 2, 3)).toBeTruthy();
    });
});

describe('function summator', () => {
    it('summator return number', () => {
        expect(summator(1, 2, 3)).toEqual(6);
        expect(summator(1, 2, 3, 4, 5)).toEqual(15);
        expect(summator(1, 2, 3, 'string')).toEqual(6);
    });
});

describe('function getUnique', () => {
    it('getUnique return strnum[]', () => {
        expect(getUnique(1, 2, 3)).toEqual([1, 2, 3]);
        expect(getUnique(1, 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
        expect(getUnique(1, 2, 3, 'string', 3, 2)).toEqual([1, 2, 3, 'string']);
    });
});

describe('function toMatrix', () => {
    it('toMatrix return strnum[][]', () => {
        expect(toMatrix([1, 2], 1)).toEqual([[1], [2]]);
        expect(toMatrix([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
    });
});

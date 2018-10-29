import { isInArray, summator } from './homework';
import { getUnique, toMatrix } from './homework';

describe('my methods', () => {
    it('isInArray return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
        expect(isInArray([1, 2, 3], 1, 2, 3)).toBeTruthy();
    });

    it('summator return number', () => {
        expect(summator(1, 2, 3, 3)).toEqual(9);
        expect(summator(1, 2, 3, '5')).toEqual(11);
        expect(summator(1, 2, 3, '5', 'string')).toEqual(11);
    });

    it('getUnique return unique[]', () => {
        expect(getUnique(1, 2, 3, 3)).toEqual([1, 2, 3]);
        expect(getUnique(1, 2, 3, '3')).toEqual([1, 2, 3, '3']);
        expect(getUnique(1, 2, 3, '3', '3', '3')).toEqual([1, 2, 3, '3']);
    });

    it('toMatrix return [][]', () => {
        expect(toMatrix([1, 2, 3], 2)).toEqual([[1, 1], [2, 2], [3, 3]]);
    });
});
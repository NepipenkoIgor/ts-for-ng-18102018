import { getUnique, isInArray, summator, toMatrix } from './homework';

describe('Is in array method', () => {
    it('isInArray should return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
    });
    it('isInArray should return true', () => {
        expect(isInArray([1, 2, 3, 'foo', 'bar'], 'foo', 'bar', 3)).toBeTruthy();
    });
});

describe('summator function', () => {
    it('summator with numbers only', () => {
        expect(summator(1, 2, 3)).toBe(6);
    });
    it('summator with numbers and string numbers', () => {
        expect(summator(1.5, '2.5', '3')).toBe(7);
    });
    it('summator with NaN strings', () => {
        expect(summator(1, '', 'foo', 2, '180bar')).toBe(3);
    });
});

describe('getUnique function', () => {
    it('should return unique items', () => {
        expect(getUnique(1, 2, 2, 1, 8, true, 'foo', 'bar', 'bar')).toEqual([1, 2, 8, true, 'foo', 'bar']);
    });
});

describe('toMatrix function', () => {
    it('should return chunks from array (equal chunks)', () => {
        expect(toMatrix([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
    });
    it('should return chunks from array (not-equal chunks)', () => {
        expect(toMatrix([1, 2, 3, 'foo', 5, 6], 4)).toEqual([[1, 2, 3, 'foo'], [5, 6]]);
    });
});
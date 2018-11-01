import { isInArray } from './homework';
import { summator } from './homework';
import {getUnique} from  './homework';
import {toMatrix} from  './homework';

describe('1 exercise', () => {
    it('isInArray should return true', () => {
        expect(isInArray([1, 2, 3],1, 2)).toBeTruthy();
    });
});

describe('2 exercise', () => {
    it('should work', () => {
        expect(summator(1, 5, '200')).toEqual(206);
    });
});

describe('3 exercise', () => {
    it('should work', () => {
        expect(getUnique(1, 3, 3, 1, true)).toEqual([1, 3, true]);
    });
});

describe('4 exercise', () => {
    it('should work', () => {
        expect(toMatrix([1, 2, 3, true], 2)).toEqual([[1, 2], [3, true]]);
    });
});
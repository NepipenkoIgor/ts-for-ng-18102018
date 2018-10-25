import { isInArray } from './homework';

describe('Is in array method', () => {
    it('isInArray should return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, 4, 5)).toBeFalsy();
    });
});
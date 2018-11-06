import { getUnique, isInArray, summator, toMatrix } from './homework';

// function isInArray
describe('Is in array method', () => {
    it('isInArray should return false', () => {
        expect(isInArray([1, 2, 3], 1, 2, true)).toBeFalsy();
    });
});

describe('Is in array method', () => {
    it('isInArray should return true', () => {
        expect(isInArray([1, '2', false], 1, '2', false)).toBeTruthy();
    });
});

// function summator
describe('This is summator function', () => {
    it('summator should return value == 6 ', () => {
        expect(summator(1, '2', 3, 'dsfss')).toEqual(6);
    });
});

// function getUnique
describe('This is getUnique function', () => {
    it('getUnique should return array unique element ', () => {
        expect(getUnique(1, '2', true, 'dsfss', 1, '2', false, 'dsfss')).toEqual([1, '2', true, 'dsfss', false]);
    });
});

// function toMatrix
describe('This is toMatrix function', () => {
    it('toMatrix should return array', () => {
        expect(toMatrix([1, true, 'werw', null], 2)).toEqual([[1, true], ['werw', null]]);
    });
});
import { expect } from 'chai';
import { HomeWorkOctober25 } from '../homework';

describe('Homework 2018 10 25', () => {
    describe('Is in array method', () => {
        it('empty case', () => {
            expect(HomeWorkOctober25.isInArray([])).to.be.true;
        });
        it('false case', () => {
            expect(HomeWorkOctober25.isInArray([1, 2, 3, '4'], 2, 3, 4)).to.be.false;
        });
        it('true case', () => {
            expect(HomeWorkOctober25.isInArray([1, 2, 3, '4'], 2, 3, '4')).to.be.true;
        });
    });

    describe('Summator method', () => {
        it('empty case', () => {
            expect(HomeWorkOctober25.summator()).to.equal(0);
        });
        it('simple number case', () => {
            expect(HomeWorkOctober25.summator(1, 2, 3, 4, 5)).to.equal(15);
        });
        it('mixed number/string case', () => {
            expect(HomeWorkOctober25.summator(1, 2, 3, 4, '5')).to.equal(15);
        });
        it('another mixed number/string case with leading numeric string', () => {
            expect(HomeWorkOctober25.summator('1', 2, 3, 4, '5')).to.equal(15);
        });
        it('another mixed number/string case with leading non-numeric string', () => {
            expect(HomeWorkOctober25.summator('a', 2, 3, 4, '5')).to.equal(14);
        });
        it('mixed number/string case with non-numeric string', () => {
            expect(HomeWorkOctober25.summator('a', 2, 3, 4, '2f')).to.equal(9);
        });
    });

    describe('Unique items method', () => {
        it('empty case', () => {
            expect(HomeWorkOctober25.getUnique()).to.equal([]);
        });
        it('simple mixed test', () => {
            expect(HomeWorkOctober25.getUnique<string | number>(1, 2, 3, 4, 5, 1, 1, 1, 1, 2, '2', '2'))
                .to.equal([1, 2, 3, 4, 5, '2']);
        });
    });

    describe('Array to Matrix method', () => {
        it('empty array case', () => {
            expect(HomeWorkOctober25.toMatrix([], 1)).to.equal([]);
        });
        it('simple case with aliquot array length and parameter', () => {
            expect(HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 2))
                .to
                .equal([[1, 2], [3, 4], [5, 6], [8, 'a'], ['b', true]]);
        });
        it('more complex case with non-aliquot array length and parameter and param > array length', () => {
            expect(HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 10))
                .to
                .equal([[1, 2, 3, 4, 5, 6, 8, 'a', 'b', true]]);
        });
        it('just a complex case', () => {
            expect(HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true, false, 'c', 15], 10))
                .to
                .equal([[1, 2, 3, 4, 5, 6, 8, 'a', 'b', true],
                    [false, 'c', 15, undefined, undefined, undefined, undefined, undefined, undefined, undefined]]);
        });
    });
});


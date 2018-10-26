
import { getUnique, summator } from './homework';

describe('Homework Typescript 26.10.2018', () => {

    describe('function summator', () => {

        it('should handle zero values correctly', () => {
            expect(summator(0, '0')).toBe(0);
        });

        it('should handle the NaN correctly', () => {
            expect(summator('o')).toBe(0);
        });

        it('should return the sum of provided arguments', () => {
            expect(summator(0, '1', 'o')).toBe(1);
        });

        it('should return the sum of provided arguments', () => {
            expect(summator(0, 1)).toBe(1);
        });

    });

    describe('function getUnique' , () => {

        it('should return a list with unique values', () => {
            expect(
                getUnique('2', 1, '2', 2, '2', true, 2, false, 'true', '1', true, 1)
            ).toEqual(['2', 1, 2, true, false, 'true', '1']);
        });
    });

});

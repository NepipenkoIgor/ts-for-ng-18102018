
import { summator } from './homework';

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

});

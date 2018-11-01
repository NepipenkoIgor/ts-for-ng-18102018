"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homework_1 = require("./homework");
const homework_2 = require("./homework");
const homework_3 = require("./homework");
const homework_4 = require("./homework");
describe('1 exercise', () => {
    it('isInArray should return true', () => {
        expect(homework_1.isInArray([1, 2, 3], 1, 2)).toBeTruthy();
    });
});
describe('2 exercise', () => {
    it('should work', () => {
        expect(homework_2.summator(1, 5, '200')).toEqual(206);
    });
});
describe('3 exercise', () => {
    it('should work', () => {
        expect(homework_3.getUnique(1, 3, 3, 1, true)).toEqual([1, 3, true]);
    });
});
describe('4 exercise', () => {
    it('should work', () => {
        expect(homework_4.toMatrix([1, 2, 3, true], 2)).toEqual([[1, 2], [3, true]]);
    });
});
//# sourceMappingURL=homework.spec.js.map
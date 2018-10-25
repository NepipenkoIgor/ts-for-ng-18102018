"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var homework_1 = require("../homework");
describe('Homework 2018 10 25', function () {
    describe('Is in array method', function () {
        it('empty case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.isInArray([])).to.be.true;
        });
        it('false case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.isInArray([1, 2, 3, '4'], 2, 3, 4)).to.be.false;
        });
        it('true case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.isInArray([1, 2, 3, '4'], 2, 3, '4')).to.be.true;
        });
    });
    describe('Summator method', function () {
        it('empty case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator()).to.equal(0);
        });
        it('simple number case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator(1, 2, 3, 4, 5)).to.equal(15);
        });
        it('mixed number/string case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator(1, 2, 3, 4, '5')).to.equal(15);
        });
        it('another mixed number/string case with leading numeric string', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator('1', 2, 3, 4, '5')).to.equal(15);
        });
        it('another mixed number/string case with leading non-numeric string', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator('a', 2, 3, 4, '5')).to.equal(14);
        });
        it('mixed number/string case with non-numeric string', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.summator('a', 2, 3, 4, '2f')).to.equal(9);
        });
    });
    describe('Unique items method', function () {
        it('empty case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.getUnique().toString()).to.equal([].toString());
        });
        it('simple mixed test', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.getUnique(1, 2, 3, 4, 5, 1, 1, 1, 1, 2, '2', '2').toString())
                .to.equal([1, 2, 3, 4, 5, '2'].toString());
        });
    });
    describe('Array to Matrix method', function () {
        it('empty array case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.toMatrix([], 1).toString()).to.equal([].toString());
        });
        it('simple case with aliquot array length and parameter', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 2).toString())
                .to
                .equal([[1, 2], [3, 4], [5, 6], [8, 'a'], ['b', true]].toString());
        });
        it('more complex case with non-aliquot array length and parameter and param > array length', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 10).toString())
                .to
                .equal([[1, 2, 3, 4, 5, 6, 8, 'a', 'b', true]].toString());
        });
        it('just a complex case', function () {
            chai_1.expect(homework_1.HomeWorkOctober25.toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true, false, 'c', 15], 10).toString())
                .to
                .equal([[1, 2, 3, 4, 5, 6, 8, 'a', 'b', true],
                [false, 'c', 15, undefined, undefined, undefined, undefined, undefined, undefined, undefined]]
                .toString());
        });
    });
});

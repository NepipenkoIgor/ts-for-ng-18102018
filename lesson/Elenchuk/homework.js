"use strict";
// 1 exercise
Object.defineProperty(exports, "__esModule", { value: true });
function isInArray(firstArg, ...someArg) {
    let isTrue = true;
    for (let x = 0; x < someArg.length; x++) {
        if (firstArg.indexOf(someArg[x]) < 0) {
            isTrue = false;
        }
    }
    return isTrue;
}
exports.isInArray = isInArray;
// 2 exercise
function summator(...numbers) {
    return numbers.reduce((a, b) => {
        if (typeof b === 'string') {
            const num = Number(b);
            if (!Number.isNaN(num)) {
                a += num;
            }
        }
        else {
            a += b;
        }
        return a;
    }, 0);
}
exports.summator = summator;
// 3 exercise
function getUnique(...someZnach) {
    const someZnachArr = [];
    let uniq;
    for (let x = 0; x < someZnach.length; x++) {
        someZnachArr.push(someZnach[x]);
    }
    uniq = someZnachArr.filter((v, i, a) => a.indexOf(v) === i);
    return uniq;
}
exports.getUnique = getUnique;
// 4 exercise
function toMatrix(data, rowSize) {
    const someMatrixArr = [];
    for (let x = 0; x < Math.ceil(data.length / rowSize); x++) {
        someMatrixArr[x] = data.slice((x * rowSize), (x * rowSize) + rowSize);
    }
    return someMatrixArr;
}
exports.toMatrix = toMatrix;
//# sourceMappingURL=homework.js.map
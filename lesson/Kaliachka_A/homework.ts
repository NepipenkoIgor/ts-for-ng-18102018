/**
 * Method to check if all arguments exist in array or not
 * @param array - array to check
 * @param  args - arguments, which should exist in array
 * @returns {boolean} - true if all args in array, false otherwise
 */
function isInArray<T>(array: T[], ...args: T[]): boolean {
    let result: boolean = true;
    args.forEach((arg: T) => {
        if (array.indexOf(arg) === -1) {
            result = false;
        }
    });
    return result;
}


/**
 * Method to calculate sum of input parameters
 * @param {(string | number)[]} args - variable number of parameters
 * @returns {number} - sum of input parameters
 */
function summator(...args: (string | number)[]): number {
    let sum: number = 0;
    args.forEach((arg: string | number) => {
            if (typeof arg === 'string') {
                sum += +arg || 0;
            } else {
                sum += arg;
            }
        }
    );
    return sum;
}

/**
 * Method, which find all unique elements of input parameters
 * @param {(T)[]} args - input parameters
 * @returns {(T)[]} - array of all unique elements
 */
function getUnique<T>(...args: T[]): T[] {
    /*    const result: T[] = [];
        args.forEach(
            (arg: T) => {
                if (args.filter((a: T) => a === arg).length === 1) {
                    result.push(arg);
                }
            }
        );*/
    return Array.from(new Set<T>(args));
}

/**
 *  Method, which generate matrix with rowSize param items per column
 *  @param {(T)[]} data - input array, which should be separate into matrix
 *  @param {number} rowSize - element per column parameter
 *  @returns {T[][]} - matrix, with elements of input array
 */
function toMatrix<T>(data: T[], rowSize: number): void {
    const colSize: number = Math.round(data.length / rowSize);
    const matrix: T[][] = Array(colSize);
    for (let i: number = 0; i < matrix.length; i++) {
        matrix[i] = (function (_i: number): T[] {
            const rowArray: T[] = Array(rowSize);
            for (let j: number = 0; j < rowSize; j++) {
                rowArray[j] = data[_i + _i + j];
            }
            return rowArray;
        })(i);
    }
}

// toMatrix<string | number | boolean>([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 6);
// console.log(isInArray([1, 2, 3, '4'], 2, 3, 4));
// console.log(isInArray([1, 2, 3, '4'], 2, 3, '4'));

// console.log(summator(1, 2, 3, 4, 5));
// console.log(summator(1, 2, 3, 4, '5'));
// console.log(summator('1', 2, 3, 4, '5'));
// console.log(summator('a', 2, 3, 4, '5'));
// console.log(summator('a', 2, 3, 4, '2f'));

// console.log(getUnique<string|number>(1, 2, 3, 4, 5, 1, 1, 1, 1, 2, '2', '2'));
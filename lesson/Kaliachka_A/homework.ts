export class HomeWorkOctober25 {

    /**
     * Method to check if all arguments exist in array or not
     * @param array - array to check
     * @param  args - arguments, which should exist in array
     * @returns {boolean} - true if all args in array, false otherwise
     */
    public static isInArray<T>(array: T[], ...args: T[]): boolean {
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
    public static summator(...args: (string | number)[]): number {
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
    public static getUnique<T>(...args: T[]): T[] {
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
    public static toMatrix<T>(data: T[], rowSize: number): T[][] {
        const colSize: number = Math.ceil(data.length / rowSize);
        const matrix: T[][] = Array(colSize);
        for (let i: number = 0; i < matrix.length; i++) {
            matrix[i] = (function (_i: number): T[] {
                const rowArray: T[] = Array(rowSize);
                for (let j: number = 0; j < rowSize; j++) {
                    rowArray[j] = data[_i * rowSize + j];
                }
                return rowArray;
            })(i);
        }
        return matrix;
    }
}

/**
 * Method to check if all arguments exist in array or not
 * @param array - array to check
 * @param  args - arguments, which should exist in array
 * @returns {boolean} - true if all args in array, false otherwise
 */
/*
function isInArray<T>(array: T[], ...args: T[]): boolean {
    let result: boolean = true;
    args.forEach((arg: T) => {
        if (array.indexOf(arg) === -1) {
            result = false;
        }
    });
    return result;
}
*/


/**
 * Method to calculate sum of input parameters
 * @param {(string | number)[]} args - variable number of parameters
 * @returns {number} - sum of input parameters
 */
/*
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
*/

/**
 * Method, which find all unique elements of input parameters
 * @param {(T)[]} args - input parameters
 * @returns {(T)[]} - array of all unique elements
 */

// function getUnique<T>(...args: T[]): T[] {
    /*    const result: T[] = [];
        args.forEach(
            (arg: T) => {
                if (args.filter((a: T) => a === arg).length === 1) {
                    result.push(arg);
                }
            }
        );*/
//    return Array.from(new Set<T>(args));
// }

/**
 *  Method, which generate matrix with rowSize param items per column
 *  @param {(T)[]} data - input array, which should be separate into matrix
 *  @param {number} rowSize - element per column parameter
 *  @returns {T[][]} - matrix, with elements of input array
 */
/*
function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const colSize: number = Math.ceil(data.length / rowSize);
    const matrix: T[][] = Array(colSize);
    for (let i: number = 0; i < matrix.length; i++) {
        matrix[i] = (function (_i: number): T[] {
            const rowArray: T[] = Array(rowSize);
            for (let j: number = 0; j < rowSize; j++) {
                rowArray[j] = data[_i * rowSize + j];
            }
            return rowArray;
        })(i);
    }
    return matrix;
}
*/

/* Is in array tests */
// console.log(isInArray([1, 2, 3, '4'], 2, 3, 4)); //expect false
// console.log(isInArray([1, 2, 3, '4'], 2, 3, '4')); // expect true

/* Summator tests */
// console.log(summator(1, 2, 3, 4, 5)); // expect 15
// console.log(summator(1, 2, 3, 4, '5')); // expect 15
// console.log(summator('1', 2, 3, 4, '5')); // expect 15
// console.log(summator('a', 2, 3, 4, '5')); // expect 14
// console.log(summator('a', 2, 3, 4, '2f')); // expect 9

/* Get unique tests */
// console.log(getUnique(1, 2, 3, 4, 5, 1, 1, 1, 1, 2, '2', '2')); // expect [1,2,3,4,5,'2']

/* To Matrix tests */
// console.log(toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 2));
// expect [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 8, 'a' ], [ 'b', true ] ]

// console.log(toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true], 10));
// expect [ [ 1, 2, 3, 4, 5, 6, 8, 'a', 'b', true ] ]

// console.log(toMatrix([1, 2, 3, 4, 5, 6, 8, 'a', 'b', true, false, 'c', 15], 10));
// expect [ [ 1, 2, 3, 4, 5, 6, 8, 'a', 'b', true ], [false, 'c', 15, undef*7]]
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

console.log(summator('a', 1, 11, '21', '2f'));
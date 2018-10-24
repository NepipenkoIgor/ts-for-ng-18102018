"use strict";
/**
 * Method to check if all arguments exist in array or not
 * @param array - array to check
 * @param  args - arguments, which should exist in array
 * @returns {boolean} - true if all args in array, false otherwise
 */
function isInArray(array, ...args) {
    let result = true;
    args.forEach((arg) => {
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
function summator(...args) {
    let sum = 0;
    args.forEach((arg) => {
        if (typeof arg === 'string') {
            sum += parseInt(arg) || 0;
        }
        else {
            sum += arg;
        }
    });
    return sum;
}
/**
 * Method, which find all unique elements of input parameters
 * @param {(T)[]} args - input parameters
 * @returns {(T)[]} - array of all unique elements
 */
function getUnique(...args) {
    const result = [];
    args.forEach((arg) => {
        if (args.filter((a) => a === arg).length === 1) {
            result.push(arg);
        }
    });
    return result;
}

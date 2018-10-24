"use strict";
/*
function isInArray(): boolean {
    return false;
}
*/
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

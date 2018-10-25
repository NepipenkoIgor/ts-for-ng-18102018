function isInArray(arr) {
    var valueArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        valueArray[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < valueArray.length; i++) {
        if (!arr.includes(valueArray[i])) {
            return false;
        }
    }
    return true;
}
// tslint:disable-next-line
console.log(isInArray([3, 4, '8'], 3, 4, '8'));
function summator() {
    var numb = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numb[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numb.length; i++) {
        if (typeof numb[i] !== 'string') {
            result += numb[i];
        }
    }
    return result;
}
// tslint:disable-next-line
console.log(summator(2, '6', 1, 7));

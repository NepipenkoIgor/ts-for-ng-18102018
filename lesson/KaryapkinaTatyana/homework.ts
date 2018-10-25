// Функция 1
type strnum = string | number;
function isInArray(arr: strnum[], ...args: strnum[]): boolean {
    for (let i = 0; i < args.length; i++) {
        if (arr.indexOf(args[i]) == -1) return false;
    }
    return true;
}
isInArray([1, 'hello', 3, 'world', 5, 8, 90], 90, 'world', 3, 'hello', 5, 8);

// Функция 2
type str_num = string | number;
function summator(...args: str_num[]): number {
    let sum: number = 0;
    for (let arg of args) {
        if (typeof arg == 'string') {
            sum += parseFloat(arg);
        } else {
            sum += arg;
        }
    }
    return sum;
}
summator(1, 2, 3, 4, 5);

// Функция 3
function getUnique(arr: ReadonlyArray<number> | ReadonlyArray<string>): number | string[] {
    let obj: any = {};
    for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        obj[a] = true;
    }
    return Object.keys(obj);
}
getUnique(['h', 'w', 'h', 'h', 'w',]);

// Функция 4
type strNum = string | number;
function toMatrix(data: strNum[], rowSize: number) {
    let result = [];
    for (let i = 0; i < Math.ceil(data.length / rowSize); i++) {
        result[i] = data.slice((i * rowSize), (i * rowSize) + rowSize);
    }
    return result;
}
toMatrix(['hello', 2, 'string', '22', 34, 'world'], 3);
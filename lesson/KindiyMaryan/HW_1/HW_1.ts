
type ns = number | string;


// 1

function isInArray(arr: ns[], ...arrArg: ns[]): boolean {
    for (let i: number = 0; i < arrArg.length; i++) {
        if (arr.find((el: ns) => el === arrArg[i])) { return true; }
    }
    return false;
}

// 2

function summator(...argArr: number[]): number;
function summator(...argArr: string[]): string;
function summator(...argArr: ns[]): ns {
    let result: ns;
    for (let i: number = 0; i < argArr.length; i++) {
        result += argArr[i];
    }
    return result;
}


// 3

function getUnique(...arr: ns[]): ns[] {
    return new Set(arr);
}


// 4

function toMatrix(data: ns[], rowSize: number) {
    return data.slice(0, rowSize + 1);
}
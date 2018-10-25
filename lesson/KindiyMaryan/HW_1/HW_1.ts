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
    let result: ns = 0;
    for (let i: number = 0; i < argArr.length; i++) {
        const el: ns = argArr[i];
        if (typeof el === 'string') {
            result += Number(el);
        } else {
            result += el;
        }
    }
    return result;
}


// 3

function getUnique(...arr: ns[]): ns[] {
    return Array.from(new Set(arr));
}


// 4

function toMatrix(data: ns[], rowSize: number) {
    return data.slice(0, rowSize + 1);
}
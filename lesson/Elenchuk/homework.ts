// 1 exercise

type primitive = number | string | boolean;
type sn = string | number;
export function isInArray(firstArg: primitive[], ...someArg: primitive[]): boolean {
    let isTrue: boolean = true;
    for (let x: number = 0; x < someArg.length; x++) {
        if (firstArg.indexOf(someArg[x]) < 0) {
            isTrue = false;
        }
    }
    return isTrue;
}

// 2 exercise

export function summator(...numbers: sn[]): number {
    return numbers.reduce((a: number, b: sn) => {
        if (typeof b === 'string') {
            const num: number = Number(b);
            if (!Number.isNaN(num)) {
                a += num;
            }
        } else {
            a += b;
        }
        return a;
    }, 0);
}


// 3 exercise

export function getUnique(...someZnach: primitive[]): primitive[] {
    const someZnachArr: primitive[] = [];
    let uniq: primitive[];
    for (let x: number = 0; x < someZnach.length; x++) {
        someZnachArr.push(someZnach[x]); }
    uniq = someZnachArr.filter((v: primitive, i: number, a: primitive[]): primitive => a.indexOf(v) === i);
    return uniq;
}

// 4 exercise

export function toMatrix(data: primitive[], rowSize: number): primitive[][] {
    const someMatrixArr: primitive[][] = [];
    for (let x: number = 0; x < Math.ceil(data.length / rowSize); x++) {
        someMatrixArr[x] = data.slice((x * rowSize), (x * rowSize) + rowSize);
    }
    return someMatrixArr;
}
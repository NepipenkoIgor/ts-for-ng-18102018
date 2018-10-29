// 1.
type sn = number | string;

export function isInArray(arr: sn[], ...args: sn[]): boolean {
    let flag: boolean = true;
    for (let i: number = 0; i < args.length; i++) {
        if (arr.indexOf(args[i]) === -1) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 2.

export function summator(...args: sn[]): number {
    return args.reduce((sum: number, currentEl: sn) => {
        if (typeof currentEl === 'string') {
            const num: number = Number(currentEl);
            if (!Number.isNaN(num)) {
                sum += num;
            }
        } else {
            sum += currentEl;
        }
        return sum;
    }, 0);
}

// 3.

export function getUnique(...args: sn[]): sn[] {
    const result: Set<sn> = new Set(args);
    return  [...result];
}

// 4.

export function toMatrix(data: sn[], rowSize: number): sn[][] {
    const resulMatrix: sn[][] = [];
    data.forEach((item: sn, index: number) => {
        resulMatrix[index] = [];
        for (let i: number = 0; i < rowSize; i++) {
            resulMatrix[index][i] = item;
        }
    });
    return resulMatrix;
}
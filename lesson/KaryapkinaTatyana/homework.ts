// Функция 1
type strnum = string | number;
export function isInArray(arr: strnum[], ...args: strnum[]): boolean {
    for (let i: number = 0; i < args.length; i++) {
        if (arr.indexOf(args[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Функция 2
export function summator(...args: strnum[]): number {
    return args.reduce((sum: number, currentElem: strnum) => {
        if (typeof currentElem === 'string') {
            const num: number = Number(currentElem);
            if (!Number.isNaN(num)) {
                sum += num;
            }
        } else {
            sum += currentElem;
        }
        return sum;
    }, 0);
}

// Функция 3
export function getUnique(...args: strnum[]): strnum[] {
    const result: Set<strnum> = new Set(args);
    return [...result];
}

// Функция 4
export function toMatrix(data: strnum[], rowSize: number): strnum[][] {
    const result: strnum[][] = [];
    const len: number = Math.ceil(data.length / rowSize);
    for (let i: number = 0; i < len; i++) {
        result.push(data.slice(i * rowSize, (i + 1) * rowSize));
    }
    return result;
}

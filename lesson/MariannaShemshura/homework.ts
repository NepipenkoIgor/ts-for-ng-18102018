type TPrimitive = string | number | null | boolean | undefined;
type TPrimitiveArray = TPrimitive[];

// 1)

export function isInArray(arr: TPrimitive[], ...items: TPrimitive[]): boolean {
        return items.filter((item: TPrimitive) => {
            return !(arr.indexOf(item) > -1);
        }).length === 0;
}

// 2
export function summator(...args: (number | string)[]): number {
    return args.reduce((result: number, current: (number | string)) => {
        if (typeof current === 'string') {
            const num: number = Number(current);
            if (!Number.isNaN(num)) {
                result += num;
            }
        } else {
            result += current;
        }
        return result;
    }, 0);
}


// 3)

export function getUnique(...items: TPrimitiveArray): TPrimitiveArray {
    return [...new Set(items)];
}

// 4)
export function toMatrix(data: TPrimitiveArray, rowSize: number):  TPrimitive[][] {
    let i: number = 0;
    const result: TPrimitive[][] = [];
    for (i; i < data.length; i += rowSize) {
        result.push(data.slice(i, i + rowSize));
    }
    return result;
}
// 1)

function isInArray(arr: (number | string)[], ...items: (number | string)[]): boolean {
        return items.filter((item: number | string) => {
            return !(arr.indexOf(item) > -1);
        }).length === 0;
}

// 2
function summator(...args: (number | string)[]): number {
    let result: number = 0;
    args.forEach((item: string | number) => {
        if (typeof item === 'string') {
            item = parseFloat(item);
        }
        if (!isNaN(item)) {
            result += item;
        }
    });
    return result;
}


// 3)
type TPrimitive = string | number | null | boolean | undefined;
type TPrimitiveArray = TPrimitive[];

function getUnique(...items: TPrimitiveArray): TPrimitiveArray {
    return items.filter((item: TPrimitive, i: number, a: TPrimitiveArray) => a.indexOf(item) === i);
}

// 4)
function toMatrix(data: TPrimitiveArray, rowSize: number):  TPrimitiveArray {
    let i: number = 0;
    const result = [];
    for (i; i < data.length; i += rowSize) {
        result.push(data.slice(i, i + rowSize));
    }
    return result;
}

type StringOrNumber = string | number;
export function summator(...args: StringOrNumber[]): number {
    return args.reduce((sum: number, current: StringOrNumber) => {
        let value: number = Number(current);
        if (isNaN(value)) {
            value = 0;
        }
        return sum + value;
    }, 0);
}

type StringOrNumberOrBoolean = StringOrNumber | boolean;
export function getUnique(...args: StringOrNumberOrBoolean[]): StringOrNumberOrBoolean[] {
    const uniqueValues: Set<StringOrNumberOrBoolean> = new Set(args);
    return [...uniqueValues];
}

export function isInArray(
        arr: StringOrNumberOrBoolean[],
        ...args: StringOrNumberOrBoolean[]): boolean {

    return args.every(
        (current: StringOrNumberOrBoolean) => isIncluded(current, arr)
    );
}

function isIncluded(
        value: StringOrNumberOrBoolean,
        arr: StringOrNumberOrBoolean[]): boolean {
    // return arr.indexOf(value) >= 0;
    return arr.includes(value);
}

type CustomType = StringOrNumberOrBoolean | null | undefined;
export function toMatrix(
        arr: CustomType[],
        columnSize: number): CustomType[][] | never {

    const length: number = arr.length;
    let index: number = 0;
    const retArray: CustomType[][] = [];

    if (columnSize > length) {
        throw new Error('columnSize must not be greater than the size of the array');
    }
    if (columnSize <= 0) {
        throw new Error('columnSize must be greater than zero');
    }

    while (index < length) {
        const pos: number = index;
        const slicedArr: CustomType[] = slice(arr, pos, columnSize);
        retArray.push(slicedArr);
        index += columnSize;
    }

    return retArray;
}

function slice(
        arr: CustomType[],
        pos: number,
        numberOfItems: number): CustomType[] {

    const startIndex: number = pos;
    // end index is not included !
    const endIndex: number = pos + numberOfItems;
    const slicedArr: CustomType[] = arr.slice(startIndex, endIndex);
    return fillWithNull(slicedArr, numberOfItems);
}

function fillWithNull(
        arr: CustomType[],
        numberOfItems: number): CustomType[] {

    const retArr: CustomType[] = [];
    for (let i: number = 0; i < numberOfItems; i++) {
        const item: CustomType = arr[i];
        if (item === undefined) {
            retArr.push(null);
        } else {
            retArr.push(item);
        }
    }
    return retArr;
}
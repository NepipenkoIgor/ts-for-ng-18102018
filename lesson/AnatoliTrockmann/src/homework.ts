
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

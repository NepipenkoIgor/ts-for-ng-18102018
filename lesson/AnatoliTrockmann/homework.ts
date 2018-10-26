
type StringOrNumber = string | number;
export function summator(...args: StringOrNumber[]): number {
    return args.reduce((sum: number, current: StringOrNumber) => {
        let value: number = Number(current);
        if (isNaN(value)) {
            value = 0;
        }
        return sum += value;
    }, 0);
}

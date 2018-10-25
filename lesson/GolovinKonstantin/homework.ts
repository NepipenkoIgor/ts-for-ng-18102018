type TSome = number | string | boolean;
type TStrinber = number | string;

export function isInArray(arr: TSome [], ...elems: TSome []): boolean {
    for (const item of [...elems]) {
        if (arr.indexOf(item) < 0) { return false; }
    }
    return true;
}

export function summator(...elems: TStrinber []): TStrinber {
    if (elems.length === 0) { return 0; }

    if (typeof [...elems][0] === 'number') {
        let total: number = 0;
        for (const item of [...elems]) {
            if (typeof item === 'number') {
                total += item;
            } else { throw new Error('Аргументы должны быть одного типа'); }
        }
        return total;
    } else {
        let total: string = '';
        for (const item of [...elems]) {
            if (typeof item === 'string') {
                total += item;
            } else { throw new Error('Аргументы должны быть одного типа'); }
        }
        return total;
    }
}

export function getUnique(...elems: TSome[]): TSome [] {
    const res: TSome[] = [];
    for (const item of [...elems]) {
        if (res.indexOf(item) < 0) { res.push(item); }
    }
    return res;
}

export function toMatrix(data: TSome[], rowSize: number): TSome [][] {
    const res: TSome [][] = [];
    const len: number = Math.ceil(data.length / rowSize);
    for (let i: number = 0; i < len; i++) {
        res.push(data.slice(i * rowSize, (i + 1) * rowSize));
    }
    return res;
}

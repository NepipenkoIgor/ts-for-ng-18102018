function isInArray(arr: unknown [], ...elems: unknown []): boolean {
    for (const item of [...elems]) {
        if (arr.indexOf(item) < 0) { return false; }
    }
    return true;
}

function summator(...elems: (string | number) []): number | string {
    if ([...elems].length === 0) { return 0; }

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

function getUnique(...elems: unknown[]): unknown [] {
    const res: unknown[] = [];
    for (const item of [...elems]) {
        if (res.indexOf(item) < 0) { res.push(item); }
    }
    return res;
}

function toMatrix(data: unknown[], rowSize: number): unknown [] {
    const res: unknown [][] = [];
    const len: number = Math.ceil(data.length / rowSize);
    for (let i: number = 0; i < len; i++) {
        res.push(data.slice(i * rowSize, (i + 1) * rowSize));
    }
    return res;
}

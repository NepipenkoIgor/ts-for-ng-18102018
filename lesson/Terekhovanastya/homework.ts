function isInArray<T>(arr: T[], ...valueArray: T[]): boolean {
    for (let i: number = 0; i < valueArray.length; i++) {
        if (!arr.includes(valueArray[i])) {
            return false;
        }
    }
    return true;
}
// tslint:disable-next-line
console.log(isInArray([3, 4, '8'], 3, 4, '8'));

function summator(...numb: number[] | string[]): number {
    let result: number = 0;

    for (let i: number = 0; i < numb.length; i++) {
        if (typeof numb[i] !== 'string') {
            result += numb[i];
        }
    }
    return result;
}
// tslint:disable-next-line
console.log( summator(2, '6', 1 , 7) );
// 1.
type snb = number | string;

function isInArray(arr: snb[], ...args: snb[]): boolean {

    args.forEach(item => {
        if (arr.indexOf(item) === -1) {
            return false;
        }
    });

    return true;
}

// 2.

function summator(...args: snb[]): number {
    return args.reduce((sum: number, currentEl: snb) => {
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


    // args.forEach((item) => {
    //   if (typeof item === 'string') {
    //     result += parseFloat(item);
    //   } else {
    //     result += item;
    //   }
    // })

    // return result;
}

// 3.

function getUnique(...args: (number | string)[]): (number | string)[] {
    const result: (number | string)[] = [];

    args.forEach((item) => {
        if (args.filter(elem => item === elem).length === 1) {
            result.push(item);
        }
    });

    return result;
}

// 4.

function toMatrix(data: (number | string)[], rowSize: number): (number | string)[][] {
    const resulMatrix: (number | string)[][] = [];

    data.forEach((item, index) => {
        resulMatrix[index] = [];

        for (let i = 0; i < rowSize; i++) {
            resulMatrix[index][i] = item;
        }

    });

    return resulMatrix;
}
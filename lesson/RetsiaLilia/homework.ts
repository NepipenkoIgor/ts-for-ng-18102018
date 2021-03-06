function isInArray(dataArray: (number|string)[], ...items: (number|string)[]): boolean {

    let itemsCountInArray = 0;

    for (let i = 1; i < items.length; i++) {
        dataArray.forEach((item: number|string) => {
            if (items[i] === item) {
                itemsCountInArray++;
            }
        });

        if (itemsCountInArray !== i) {
            return false;
        }
    }
    return true;
}

function summator( ...items: (string|number)[]): number {
    let total: number = 0;
    for (let i = 0; i < items.length; i++) {
        let number = Number(items[i]);
        if (Number.isNaN(number)) {
            number = 0;
        }
        total += number;
    }

    return total;
}

type TPrimitiveTypes = number | string |  boolean | null | undefined ;

type TPrimitiveArray = TPrimitiveTypes[];

function getUniqueArr( ...items: TPrimitiveArray): TPrimitiveArray {
    const uniqueArray: TPrimitiveArray = [];
    for (let i = 0; i < items.length; i++) {
        if (uniqueArray.indexOf(items[i]) < 0) {
            uniqueArray.push(items[i]);
            }
    }

    return uniqueArray;
}


type TStrNum = string | number;
type TStrNumArray = TStrNum[];
type TStrNumMultiLevelArray = TStrNum[][];

function toMatrixa(data: TStrNumArray, rowSize: number): TStrNumMultiLevelArray {
    const result: TStrNumMultiLevelArray = [];
    for (let i: number = 0; i < Math.ceil(data.length / rowSize); i++) {
        const arr: TStrNumArray = data.slice((i * rowSize), (i * rowSize) + rowSize);
        result.push(arr);
    }
    return result;
}

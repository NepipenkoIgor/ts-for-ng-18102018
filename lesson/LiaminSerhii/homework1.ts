type TPrimitive = number | string | boolean;

/*
1)
  Написать функцию inArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

function inArray(
    arr: TPrimitive[],
    ...items: TPrimitive[]
): boolean {
    for (const item of items) {
        if (!(arr.indexOf(item) > -1)) {
            return false;
        }
    }

    return true;
}

console.log(inArray([1, 2], 1)); // true
console.log(inArray([3, 2], 1)); // false
console.log(inArray([3, 2], 3, 2, 1)); // false
console.log(inArray([3, 2], 3, 2)); // true
console.log(inArray([3, 2], '3', 2)); // false

/*
2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/

function summator(...args: TPrimitive[]): number {
    return args.reduce(
        (res: number, item: TPrimitive) => {
            const itemNumber: number = Number(item);

            return res + (isNaN(itemNumber)
                ? 0
                : itemNumber
            );
        }, 0
    );
}

console.log(summator('1', '5ll', 2)); // 3

/*
3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...args: TPrimitive[]): TPrimitive[] {
    return [... new Set(args)];
}

console.log(getUnique(1, 2, 2, 3, 4, 4));

/*
4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/
function toMatrix(data: TPrimitive[], rowSize: number): TPrimitive[][] {
    rowSize = Math.ceil(rowSize);

    const res: TPrimitive [][] = [];
    const subArrLen: number = (rowSize > data.length)
        ? data.length
        : rowSize
    ;

    for (let i: number = 0; i < subArrLen; i++) {
        res.push(data.slice(0, subArrLen));
    }

    return res;
}

console.log(toMatrix([1, 2, 3, 4, 5], 3));
// Используйте то что увидели на занятии
// Никаких any , обобщите аргументы на примитивы

// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

export type ex1 = string | number | boolean;

export function isInArray(arrIn: ex1[], ...args: ex1[]): boolean {
    const argsLength: number = args.length;
    if (!argsLength) {
        return false;
    }
    for (let j: number = 0; j < argsLength; j++) {
        const searchElem: ex1 = args[j];
        const i: number = arrIn.indexOf(searchElem);
        if (searchElem !== arrIn[i]) {
            return false;
        }
    }
    return true;
}


// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type ex2 = string | number;

export function summator(...args: ex2[]): number {
    let rSumm: number = 0;
    for (let i: number = 0; i < args.length; i++) {
        let item: ex2 = args[i];
        if (typeof item === 'string') {
            item = Number(item);
            item = (!isNaN(item)) ? item : 0;
        }
        rSumm = rSumm + item;
    }
    return rSumm;
}

// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

export function getUnique(...args: ex1[]): ex1[] {
    const rArray: ex1[] = [];
    for (const item of [...args]) {
        if (rArray.indexOf(item) < 0) {
            rArray.push(item);
        }
    }
    return rArray;
}


// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов берутся из массива data.
//  Оригинальный массив не должен быть изменен.

export function toMatrix(data: ex1[], rowSize: number): ex1[][] {
    const arrReturn: ex1[][] = [];
    const len: number = Math.ceil(data.length / rowSize);
    for (let i: number = 0; i < len; i++) {
        arrReturn.push(data.slice(i * rowSize, (i + 1) * rowSize));
    }
    return arrReturn;
}
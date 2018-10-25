/*
Используйте то что увидели на занятии
Никаких any , обобщите аргументы на примитивы

3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.

4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/
// number, string, boolean, symbol, null, or undefined

type primitive = number | string | boolean;

/*
1)
  Написать функцию inArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

function inArray(
    arr: primitive[],
    ...items: primitive[]
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

function summator(...args: primitive[]): number {
    return args.reduce(
        (res: number, item: primitive) => {
            const itemNumber : number = Number(item) ;
            return res + (isNaN(itemNumber) ? 0 : itemNumber);
        }, 0
    );
}

console.log(summator('1', '5', 2));
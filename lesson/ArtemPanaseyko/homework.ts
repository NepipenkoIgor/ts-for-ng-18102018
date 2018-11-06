
     type sn  = number | string;
     type snb = string | number | boolean;
    /*
    Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    Возвращает true, если все аргументы, кроме первого входят в первый.
    Первым всегда должен быть массив.
     */
    export function isInArray(firstArray: snb[], ...args: snb[]): boolean {
        let result: boolean = true;
        args.forEach((arg: snb) => {
            if (firstArray.indexOf(arg) === -1) {
                result = false;
            }
        });
        return result;
    }

    /*
    Написать функцию summator(), которая суммирует переданые ей аргументы.
    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
     */
    export function summator(...args: sn[]): number {
        return args.reduce((sum: number, currEl: sn) => {
            if (typeof currEl === 'string') {
                const num: number = Number(currEl);
                if (!Number.isNaN(num)) {
                    sum += num;
                }
                } else {
                    sum += currEl;

                }
                return sum;
            }, 0);
        }

    /*
    Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
     Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.
     */
    export function getUnique(...args: snb[]): snb[] {
        return Array.from(new Set<snb>(args));
    }

    /*
    Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
    возвращает новый массив. Число показывает количество элементов в подмассивах,
    элементы подмассивов беруться из массива data.
    Оригинальный массив не должен быть изменен.
     */
    export function toMatrix<T>(data: T[], rowSize: number): T[][] {
        const matrix: T[][] = [];
        for (let i: number = 0; i < data.length; i += rowSize) {
            matrix.push(data.slice(i, i + rowSize));
        }
        return matrix;
    }

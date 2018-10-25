// interface IAccount {
//     name: string;
//     age: number;
// }
//
// let person = IAccount;

// const account = {
//     name: 'Igor',
//     age: 32,
// };
//
// let me: typeof account;
// me = 1;

// class Account {
//
// }
//
// let me = Account;
// let me1: Account;


// let a: number | null = 1;
// a = null;
// let b: string;
// b = '1';
//
// let c: boolean = true;
// c = 1;

// let a: void = undefined;
//
// function f(): void {
//
// }


// TODO  never vs void ????
// function f(): never {
//     throw new Error();
// }
// type TAccount = {
//     name: string;
//     age?: number;
// };
// const account: TAccount = {
//     name: 'Igor',
//     // age: 32,
// };
//
// // account.age = 33;
// let a: Readonly<TAccount>;
// let arr: ReadonlyArray<string> = ['asd', '1'];
// arr[100] = 's';
// arr.push('asd');

// let arr: [string, number] = ['s', 1];

// let cb: new (a: number) => void;

// type TAccount = {
//     male: boolean
// };
//
// interface IName {
//     firstName: string;
// }
//
// interface IAge {
//     age?: number;
// }
//
// interface IAccount extends IName, IAge, TAccount {
// }
//
// class Person implements IName, IAge {
//     public firstName!: string;
//     public age!: number;
// }

// interface IAccount<Info extends { firstName: string }> {
//     id: number;
//     info: Info;
// }
//
// type TAdmine = {
//     firstName: string
//     permission: string[]
// };
// type TUser = {
//     phone: number
// };
//
// let user: IAccount<TAdmine> = {
//     id: 1,
//     info: {
//         firstName: 'Igor',
//         permission: [
//             'asd', 'asd'
//         ]
//     }
// };

// function average(...items: number[]): string {
//     items.reduce(())
//     const result: number = (a + b + c) / 3;
//     return `Average is ${result}`;
// }
//
// average(1, 2, 3);
// average(1, 2);
// average(1);
// average(1, 2, 2, 3);
// average(1, 2, '2');
// function average(a: string | number, b: string | number, c?: number): string | number {
//     let result: number = a + b + c;
//
// }

// function isString(a: string | number): a is string {
//     return typeof a === 'string';
// }
//
// function average(a: number, b: string): number;
// function average(a: string, b: number, c: number): string;
// function average(a: string | number, b: string | number, c?: number): string | number {
//     let result: number = 0;
//     if (isString(a)) {
//
//         result += parseInt(a);
//     } else {
//         a.
//     }
// }

// average(1, 's');
// average('1', 's');
// average('1', 1);
// average('s', 2, 1);

// const sum: IUser = 1 + 2;
// console.log(sum);
interface IPointX {
    readonly x: number;

}

interface IPointY {
    readonly y: number;

}

// class Point implements IPointX {
//
//     public constructor(
//         public readonly x: number,
//         private readonly y: number,
//         protected readonly z: number,
//     ) {
//     }
//
//     public sum(): number {
//         return this.x + this.y;
//     }
// }
//
// class CustomPoint extends Point {
//     public constructor(
//         public readonly x1: number,
//         public readonly y1: number,
//         public readonly z1: number,
//     ) {
//         super(x1, y1, z1);
//     }
// }
//
// const point: Point = new Point(10, 11, 11);
//
// point.

// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {
//
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// const inst1 =  Singleton.getInstance();
// const inst2 =  Singleton.getInstance();

// abstract class AbstractPoint {
//
//
//     public abstract y: number;
//     private _x: number = 1;
//
//     public abstract sum(): number;
//
//     public getX(): number {
//         return this.x;
//     }
//
//     public get x(): number {
//         return this._x * 2;
//     }
//
//     public set x(value: number) {
//         this._x = value;
//     }
//
// }
//
// class Point extends AbstractPoint {
//     public y: number = 10;
//
//     public sum(): number {
//         return 2;
//     }
//
// }
//
//
// class Point1 extends AbstractPoint {
//     public y: number = 10;
//
//     public sum(): number {
//         return 100;
//     }
// }
//
//
// const p1 = new AbstractPoint();

// tslint:disable-next-line
function logMethod(_target: any, key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalDesc: Function = descriptor.value;
    return {
        ...descriptor,
        // tslint:disable-next-line
        value: (...args: any[]) => {
            // tslint:disable-next-line
            const b = args.map((v: any) => JSON.stringify(v))
                .join();
            // tslint:disable-next-line
            const result: any = originalDesc(...args);
            const r: string = JSON.stringify(result);
            // tslint:disable-next-line
            console.log(`Call: ${key}(${b}) => ${r}`);
            return result;
        }
    };

}

class MathLib {
    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

let m: MathLib = new MathLib();
m.areaOfCircle(10);
m.areaOfCircle(200);
m.areaOfCircle(2);
"use strict";
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

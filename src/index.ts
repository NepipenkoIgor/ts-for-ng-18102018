// import { from, fromEvent, Observable } from 'rxjs';
// import {  switchMap } from 'rxjs/operators';
//
// console.log('hi all 11');

// const clickSequence$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
// clickSequence$.subscribe((event: MouseEvent) => console.log(`Sub1 => ${event.x}`));

// setTimeout(() => {
//     clickSequence$.subscribe((event: MouseEvent) => console.log(`Sub2 => ${event.x}`));
// }, 4000);

// function request$(): Observable<any> {
//     return from(fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((res: Response) => res.json()));
// }

// clickSequence$
//     .pipe(
//         switchMap((_event: MouseEvent) => request$(), (_, data: any) => {
//             return data.email;
//         }),
//     )
//     .subscribe((result: any) => {
//         console.log(`Sub1 => ${result}`);
//         // result.subscribe((res: any) => {
//         //     console.log(res);
//         // });
//     });

// Observable + Observer = Subject

// import { ReplaySubject } from 'rxjs';
//
// const controlSequence$$: ReplaySubject<number> = new ReplaySubject();
//
// // controlSequence$$.subscribe((value: number) => {
// //     console.log(value);
// // });
// controlSequence$$.next(1);
// controlSequence$$.next(2);
// controlSequence$$.next(3);
// controlSequence$$.next(4);
// controlSequence$$.next(5);
//
// // controlSequence$$.subscribe((value: number) => {
// //     console.log(value);
// // });
// controlSequence$$.next(6);
// controlSequence$$.next(7);
// controlSequence$$.complete();
//
// setTimeout(() => {
//     controlSequence$$.subscribe((value: number) => {
//         console.log(`Sub2 ${value}`);
//     });
// }, 4000);
// setTimeout(() => {
//     controlSequence$$.subscribe((value: number) => {
//         console.log(`Sub3 ${value}`);
//     });
// }, 8000);

// import { ConnectableObservable, from, interval, Subscription } from 'rxjs';
// import { share } from 'rxjs/operators';
//
// //const controlSequence$$: Subject<number> = new Subject();
// const connectableSequence$: ConnectableObservable<number> = interval(1000)
//     .pipe(
//         // multicast(controlSequence$$)
//         share()
//     ) as  ConnectableObservable<number>;
//
//
// // connectableSequence$.connect();
// const sub1: Subscription = connectableSequence$.subscribe((value: number) => console.log(`Sub1 => ${value}`));
//
// setTimeout(() => {
//     connectableSequence$.subscribe((value: number) => console.log(`Sub2 => ${value}`));
//     sub1.unsubscribe();
// }, 4000);
//
// setTimeout(() => {
//     // connectableSequence$.connect();
// }, 8000);

// TODO good example refCount

// import { from, Observable } from 'rxjs';
// import { map, subscribeOn } from 'rxjs/operators';
// import { async } from 'rxjs/internal/scheduler/async';
//
// const arr: number[] = [];
// for (let i: number = 0; i < 10000; i++) {
//     arr.push(i);
// }
//
// const sequence$: Observable<number> = from(arr);
//
// console.time('example');
// sequence$.pipe(
//     // observeOn(asap),
//     map((x: number) => x ** 2 / 4),
//     subscribeOn(async)
// )
//     .subscribe(() => {}, () => {}, () => {
//         console.timeEnd('example');
//     });

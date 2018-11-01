// let a: number = 3;
// let b: number = 10 * a;
// console.log(b);
//
//
// a = 4;
// console.log(b);

// of(3, 4)
//     .pipe(map((x: number) => x * 10))
//     .subscribe(x => console.log(x));

// from<number>([1, 2, 3, 4, 5])
//     .subscribe((x: number) => console.log(x));
// let count: number = 1;
// const sequence$: Observable<number> = Observable.create((observer: Observer<number>) => {
//
//     // const id: number =
//     const id: number = setInterval(() => {
//         observer.next(count++);
//         if (count === 5) {
//             observer.complete();
//             clearInterval(id);
//         }
//     }, 1000);
// });
// sequence$.subscribe((x: number) => {
//     console.log(`Subscribe 1 ${x}`);
// }, () => {}, () => {
//     console.log('DONE');
// });
//
// setTimeout(() => {
//     sequence$.subscribe((x: number) => {
//         console.log(`Subscribe 2 ${x}`);
//     }, () => {}, () => {
//         console.log('DONE');
//     });
// }, 7000);

// MAP
// const sequence1$: Observable<number> = interval(1000);
/*
 sequence1$: ---0---1---2---3--
                 map((x)=x*2)
             ---0---2---4---6--
 */

// sequence1$.pipe(map((x: number) => x * 2))
//     .subscribe((x: number) => console.log(x));


// TAP
// const sequence1$: Observable<number> = interval(1000);
/*
 sequence1$: ---0---1---2---3--
                 tap((x)=console.log(x))
             ---0---1---2---3--
 */
// sequence1$.pipe(tap((x: number) => {
//     console.log(x);
//     return x * 10;
// }))
//     .subscribe((x: number) => console.log(`SUBSCRIBE => ${x}`));


/*
  sequence1$ --0--1--2--3--4--5--6--7-
              filter(x=>x%2 ===0)
             --0-----2-----4-----6----

 */

// import { interval, Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';
//
// const sequence1$: Observable<number> = interval(1000);
// sequence1$.pipe(filter((x: number) => x % 2 === 0))
//     .subscribe((x: number) => console.log(x));

// TAKE, FIRST, SKIP
/*
sequence1$ --0--1--2--3--4--5--6--7-
                  take(3)
             --0--1--2|

     sequence1$ --0--1--2--3--4--5--6--7-
                  take(1)/ first(1)
                --0|

      sequence1$ --0--1--2--3--4--5--6--7-
                    skip(5)
                    take(2)
                 -----------------5--6|
 */

// import { interval, Observable } from 'rxjs';
// import { skip, take } from 'rxjs/operators';
//
// const sequence1$: Observable<number> = interval(1000);
// sequence1$.pipe(skip(5), take(2))
//     .subscribe((x: number) => console.log(x));

// import { interval, Observable } from 'rxjs';
// import { concat, skip, take } from 'rxjs/operators';
//
// const sequence1$: Observable<number> = interval(1000)
//     .pipe(take(4));
// const sequence2$: Observable<number> = interval(1000)
//     .pipe(skip(3), take(2));
//
// /*
//  sequence1$ --0--1--2--3|
//  sequence1$ -----------3--4|
//               concat
//             --0--1--2--3-----------3--4|
//  */
//
// sequence1$.pipe(concat<number, number>(sequence2$))
//     .subscribe((x: number) => console.log(x));


// MERGE

// import { interval, Observable } from 'rxjs';
// import { combineLatest, merge, take } from 'rxjs/operators';
//
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
//
// const sequence2$: Observable<number> = interval(300)
//     .pipe(take(5));

/*
  sequence1$ ----0----1----2----(3|)
  sequence2$ --0--1--2--3--4(|)
            merge
             --0-01--21-3--(24)----(3|)

 */

// sequence1$.pipe(merge<number>(sequence2$))
//     .subscribe((x: number) => console.log(x));

// COMBINE LATES


// import { interval, Observable } from 'rxjs';
// import { combineLatest, take } from 'rxjs/operators';
//
// const sequence1$: Observable<number> = interval(500)
//     .pipe(take(4));
//
// const sequence2$: Observable<number> = interval(300)
//     .pipe(take(5));

/*
  sequence1$ ----0----1----2----(3|)
  sequence2$ --0--1--2--3--4(|)
              combineLatest
             ----[0,0][0,1]--[0,2][1,2]-[1,3]--[2,3][2,4]--[3,4]

 */
// sequence1$.pipe(combineLatest<number, number>(sequence2$, (x: number, y: number) => x + y))
//     .subscribe((x: number) => console.log(x));

// ZIP
// import { Observable, of } from 'rxjs';
// import { take, zip } from 'rxjs/operators';

// const sequence1$: Observable<string> = of('h', 'e', 'l', 'l', 'o');
// const sequence2$: Observable<number> = interval(1000)
//     .pipe(take(5));

/*
   sequence1$ (hello)|
   sequence2$ ----0----1----2----3----4|
          zip((x,y)=>x)
              ----h----e----l----l----o

 */

// sequence2$
//     //.pipe(zip(sequence2$, (x: string, _y: number) => x))
//     .subscribe((x: string) => console.log(x));

import { interval, Observable, of } from 'rxjs';
import { delay, map, retryWhen, zip } from 'rxjs/operators';

const sequence$: Observable<string> = interval(500)
    .pipe(zip<number, string>(of('a', 'b', 'c', 1, 'd', 'e'), (_x: number, y: string) => y));

const sequence1$: Observable<string> = sequence$.pipe(
    map((x: string) => x.toUpperCase()),
    // catchError((_err: any, out: Observable<string>) => out)
) as Observable<string>;
sequence1$.pipe(retryWhen((errObs: Observable<any>) => errObs.pipe(delay(3000))))
    .subscribe((x: string) => console.log(`NEXT=> ${x}`), (err: any) => {
        console.log(`ERR => ${err}`);
    }, () => {
        console.log('done');
    });
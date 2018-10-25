//1 exercise

type primitive = number|string|boolean;
function isInArray(firstArg: primitive[], ...someArg: primitive[]): boolean {
    let isTrue = true;
    for (let x = 0; x < someArg.length; x++) {
        if (firstArg.indexOf(someArg[x]) < 0) {
            isTrue = false;
        }
    }
    return isTrue;
}
console.log('1 exercise : isInArray - ' + isInArray(['1',2,3], '1',44));

//2 exercise

// with for

// function summator(...numbers: (string|number)[]) {
//     let aggregateNumber:number = 0;
//
//     for (var i = 0; i < numbers.length; i++)
//         aggregateNumber += +numbers[i];
//     return aggregateNumber;
// }

//with reduce

function summator(...numbers: (string|number)[]) {
    return numbers.reduce(function(a, b){ return +a + +b; });
}

console.log('2 exercise : Sum is ' + summator(1,5,'200'));


//3 exercise

function getUnique(...someZnach: primitive[]): primitive[] {
    let someZnachArr: primitive[] = [];
    let uniq: primitive[];
    for (let x = 0; x < someZnach.length; x++) someZnachArr.push(someZnach[x]);
    uniq = someZnachArr.filter((v, i, a) => a.indexOf(v) === i);
    return uniq;
}
console.log('3 exercise : Unique Arrey is: ');
console.log(getUnique(1,3,3,true,'four',1));


//4 exercise

function toMatrix(data: primitive[], rowSize: number): primitive[] {
    let someMatrixArr: primitive[] = [];
    for (let x = 0; x < Math.ceil(data.length/rowSize); x++){
        someMatrixArr[x] = data.slice((x*rowSize), (x*rowSize) + rowSize);
    }
    return someMatrixArr;
}
console.log('4 exercise : New arrey is: ');
console.log(toMatrix([1,2,true,44,5,8,98,'yes'],2));
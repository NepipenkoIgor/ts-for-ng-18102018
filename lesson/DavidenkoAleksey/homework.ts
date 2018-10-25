// 1.

function isInArray(arr: Array<number | string>, ...args: Array<number | string>): boolean{
  
  args.forEach(item => {
    if (arr.indexOf(item) === -1) {
      return false;
    }
  });

  return true
}

// 2.

function summator(...args: Array<number | string>): number {
  let result: number = 0;
  
  args.forEach((item) => {
    if (typeof item === 'string') {
      result += parseFloat(item);
    } else {
      result += item;
    }
  })

  return result;
}

// 3.

function getUnique(...args: Array<number | string>): Array<number | string> {
  let result: Array<number | string> = [];

  args.forEach((item) => {
    if (args.filter(elem => item === elem).length === 1) {
      result.push(item);
    }
  })

  return result;
}

// 4.

function toMatrix(data: Array<number | string>, rowSize: number): Array<Array<number | string>> {
  let resulMatrix: Array<Array<number | string>> = [];

  data.forEach((item, index) => {
    resulMatrix[index] = [];

    for(let i = 0; i < rowSize; i++) {
      resulMatrix[index][i] = item;
    }

  })

  return resulMatrix;
}
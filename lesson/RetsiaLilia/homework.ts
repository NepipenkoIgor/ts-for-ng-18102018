type TPrimitiveTypes = number | string | boolean | null | undefined
type TPrimitiveArray = TPrimitiveTypes[]
type TStrNum = string | number
type TStrNumArray = TStrNum[]
type TStrNumMultiLevelArray = TStrNum[][]

export function isInArray(
  dataArray: TStrNumArray,
  ...items: TStrNumArray
): boolean {
  for (let i = 1; i < items.length; i++) {
    // if (dataArray.includes(items[i])) {
    //     return false
    //   }
    if (dataArray.indexOf(items[i]) == -1) {
      return false
    }
  }
  return true
}

export function summator(...items: TStrNumArray): number {
  return items.reduce((accumulator: number, currentValue: TStrNum) => {
    let number = Number(currentValue)
    if (isNaN(number)) {
      return accumulator
    } else {
      return accumulator + number
    }
  }, 0)
}

export function getUniqueArr(...items: TPrimitiveArray): TPrimitiveArray {
  let uniqueArray = new Set(items)
  return [...uniqueArray]
}

export function toMatrix(
  data: TStrNumArray,
  rowSize: number
): TStrNumMultiLevelArray {
  let result: TStrNumMultiLevelArray = []
  for (let i: number = 0; i < Math.ceil(data.length / rowSize); i++) {
    let arr: TStrNumArray = data.slice(i * rowSize, i * rowSize + rowSize)
    result.push(arr)
  }
  return result
}

type TPrimitiveTypes = number | string | boolean | null | undefined
type TPrimitiveArray = TPrimitiveTypes[]
type TStrNum = string | number
type TStrNumArray = TStrNum[]
type TStrNumMultiLevelArray = TStrNum[][]

export function isInArray(
  dataArray: TStrNumArray,
  ...items: TStrNumArray
): boolean {
  for (let i: number = 1; i < items.length; i++) {
    // if (dataArray.includes(items[i])) {
    //     return false
    //   }
    if (dataArray.indexOf(items[i]) === -1) {
      return false
    }
  }
  return true
}

export function summator(...items: TStrNumArray): number {
  return items.reduce((accumulator: number, currentValue: TStrNum) => {
    const currNumber: number = Number(currentValue)
    if (isNaN(Number(currentValue))) {
      return accumulator
    } else {
      return accumulator + currNumber
    }
  }, 0)
}

export function getUniqueArr(...items: TPrimitiveArray): TPrimitiveArray {
  return [...new Set(items)]
}

export function toMatrix(
  data: TStrNumArray,
  rowSize: number
): TStrNumMultiLevelArray {
  const result: TStrNumMultiLevelArray = []
  for (let i: number = 0; i < Math.ceil(data.length / rowSize); i++) {
    const arr: TStrNumArray = data.slice(i * rowSize, i * rowSize + rowSize)
    result.push(arr)
  }
  return result
}

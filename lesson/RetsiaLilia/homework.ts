type TPrimitiveTypes = number | string | boolean | null | undefined
type TPrimitiveArray = TPrimitiveTypes[]
type TStrNum = string | number
type TStrNumArray = TStrNum[]
type TStrNumMultiLevelArray = TStrNum[][]

function isInArray(dataArray: TStrNumArray, ...items: TStrNumArray): boolean {
  var uniqueArray = new Set(items)
  if (uniqueArray.size === dataArray.length) {
    return true
  }
  return false
}

function summator(...items: TStrNumArray): number {
  return items.reduce((accumulator: number, currentValue: TStrNum) => {
    let number = Number(currentValue)
    if (isNaN(number)) {
      return accumulator
    } else {
      return accumulator + number
    }
  }, 0)
}

function getUniqueArr(...items: TPrimitiveArray): TPrimitiveArray {
  let uniqueArray = new Set(items)
  return [...uniqueArray]
}

function toMatrix(data: TStrNumArray, rowSize: number): TStrNumMultiLevelArray {
  let result: TStrNumMultiLevelArray = []
  for (let i: number = 0; i < Math.ceil(data.length / rowSize); i++) {
    let arr: TStrNumArray = data.slice(i * rowSize, i * rowSize + rowSize)
    result.push(arr)
  }
  return result
}

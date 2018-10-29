import { getUniqueArr, isInArray, summator, toMatrix } from './homework'

describe('the check if an unique array', function() {
  it('Expects true if arguments in array', function() {
    expect(isInArray([1, 2, 3, 4, 5], 1, 2, 3, 4, 5)).toBeTruthy()
  })
})

describe('sum arguments', function() {
  it('Expects true if arguments in array', function() {
    expect(summator(1, 2, 3, 4, '5')).toEqual(15)
  })
})

describe('get unique array', function() {
  it('Expects true if arguments in array', function() {
    expect(getUniqueArr(1, 2, 3, 4, 5, 5, '5')).toEqual([1, 2, 3, 4, 5, '5'])
  })
})

describe('convert to Matrix', function() {
  it('Expects true if arguments in array', function() {
    expect(toMatrix([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  })
})

var _ = require('lodash')

const obj = {
  a: 1,
  b: 2,
  c: 3,
}
let objSum = _.sum(obj)
console.log(objSum)

const arr = [1, 2, 3]
let arrSum = _.sum(arr)
console.log(arrSum)

import { _curry2 } from './internal/_curry'

function is(constructor: Function, test: any) {
  // undefined, null 无法探测
  return (test != null && test.constructor === constructor) || test instanceof constructor
}

export default _curry2(is)

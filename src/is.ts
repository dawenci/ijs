import { curry2 } from './curry'

function is(constructor: Function, test: any) {
  // undefined, null 无法探测
  return test != null
    && test.constructor === constructor || test instanceof constructor
}

export default curry2(is)

import { curry2 } from './curry'

function is(constructor: Function, test: any) {
  return test instanceof constructor
}

export default curry2(is)

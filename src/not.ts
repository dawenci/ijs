import { _curry1 } from './internal/_curry'

function not(a: any): boolean {
  return !a
}

export default _curry1(not)

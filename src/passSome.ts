import { _curry2 } from './internal/_curry'

function passSome(tests: Array<(input: any) => boolean>, input: any): boolean {
  const size = tests.length >>> 0
  if (!size) return false
  for (let index = 0; index < size; index += 1) {
    if (tests[index](input)) return true
  }
  return false
}

export default _curry2(passSome)

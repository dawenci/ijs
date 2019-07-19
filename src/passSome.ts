import { curry2 } from './curry'

function passSome(tests: Array<(input: any) => boolean>, input: any): boolean {
  const size = tests.length >>> 0
  if (!size) return false
  for (let index = 0; index < size; index += 1) {
    if (tests[index](input)) return true
  }
  return false
}

export default curry2(passSome)

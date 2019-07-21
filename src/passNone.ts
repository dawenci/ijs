import { _curry2 } from './internal/_curry'

function passNone(tests: Array<(input: any) => boolean>, input: any): boolean {
  const size = tests.length >>> 0
  if (!size) return true
  for (let index = 0; index < size; index += 1) {
    if (tests[index](input)) return false
  }
  return true
}

export default _curry2(passNone)

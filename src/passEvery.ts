import { curry2 } from './curry'

function passEvery(tests: Array<(input: any) => boolean>, input: any): boolean {
  const size = tests.length >>> 0
  if (!size) return true
  for (let index = 0; index < size; index += 1) {
    if (!tests[index](input)) return false
  }
  return true
}

export default curry2(passEvery)

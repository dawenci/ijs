import { curry2 } from './curry'

function passNone(tests: Array<(input: any) => boolean>, input: any): boolean {
  const size = tests.length >>> 0
  if (!size) throw new Error('至少需要一个测试条件')
  for (let index = 0; index < size; index += 1) {
    if (tests[index](input)) return false
  }
  return true
}

export default curry2(passNone)

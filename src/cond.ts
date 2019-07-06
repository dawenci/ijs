import { curry1 } from './curry'

function cond(pairs: Array<[Function, Function]> = []): any {
  const count = pairs.length
  let index = 0
  return function() {
    while (index < count) {
      const [test, action] = pairs[index]
      if (test.apply(void 0, arguments)) {
        return action.apply(void 0, arguments)
      }
      index += 1
    }
  }
}

export default curry1(cond)

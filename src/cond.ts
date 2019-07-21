import { _curry1 } from './internal/_curry'

function cond(pairs: Array<[Function, Function]> = []): any {
  const count = pairs.length
  return function() {
    for (let index = 0; index < count; index += 1) {
      const [test, action] = pairs[index]
      if (test.apply(void 0, arguments)) {
        return action.apply(void 0, arguments)
      }
    }
  }
}

export default _curry1(cond)

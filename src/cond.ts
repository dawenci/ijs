import { curry1 } from './curry'

export default curry1(pairs => {
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
})

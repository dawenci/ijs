import { _curry3 } from './internal/_curry'

function invoker(method, args, obj) {
  return obj[method].apply(obj, args)
}

export default _curry3(invoker)

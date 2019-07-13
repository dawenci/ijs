import { curry3 } from './curry'

function invoker(method, args, obj) {
  return obj[method].apply(obj, args)
}

export default curry3(invoker)

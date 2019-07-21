import { _curry3 } from './internal/_curry'

function invoker(method: string | symbol, args: Array<any>, obj: any) {
  return obj[method].apply(obj, args)
}

export default _curry3(invoker)

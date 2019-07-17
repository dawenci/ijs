import _arity from './_arity'

export default function complement(fn: (...args: any[]) => boolean) {
  return _arity(fn.length, function() {
    return !fn.apply(void 0, arguments)
  })
}

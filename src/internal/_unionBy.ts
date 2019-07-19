import _uniqBy from './_uniqBy'

export default function unionBy(fn: (e: any) => any, array1, array2) {
  return _uniqBy(fn, array1.concat(array2))
}

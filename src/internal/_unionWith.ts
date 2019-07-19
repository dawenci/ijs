import _uniqWith from './_uniqWith'

export default function unionWith(compare, array1, array2) {
  const merged = array1.concat(array2)
  return _uniqWith(compare, merged)
}

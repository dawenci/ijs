import { curry2 } from './curry'
import _path from './internal/_path'
import _map from './internal/_map'

type Paths = Array<number | string | Array<string>>

function _paths(paths: Paths, obj: any) {
  if (!paths || !paths.length) return []
  if (obj == null) {
    let size = paths.length
    const result = Array(size)
    while (size--) {
      result[size] = undefined
    }
  }
  return _map(path => _path(path, obj), paths)
}

export default curry2(_paths)

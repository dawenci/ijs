import _indexOf from './_indexOf'

export default (props, obj) => {
  const result = {}
  if (obj == null) {
    return result
  }
  if (props == null || !props.length) {
    props = []
  }
  props = props.map(key => String(key))
  for (let prop in obj) {
    if (_indexOf(0, prop, props) === -1) {
      result[prop] = obj[prop]
    }
  }
  return result
}

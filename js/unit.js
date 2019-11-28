function deepClone(data) {
  if (!isObject(data)) {
    throw new Error('not a object')
  }
  let ret = Array.isArray(data) ? [] : {}
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      const temp = data[key]
      if (isObject(temp)) {
        ret[key] = deepClone(temp)
      } else {
        ret[key] = temp
      }
    }
  }
  return ret
}

function isObject(data) {
  if (typeof data === 'object' && data !== null) {
    return true
  }
  return false
}
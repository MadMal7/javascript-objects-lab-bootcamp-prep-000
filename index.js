var recipie = {}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key) {
  return Object.assign({}, object[key] )
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
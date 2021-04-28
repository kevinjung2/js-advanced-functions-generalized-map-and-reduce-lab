// Add your functions here
function map(array, callback) {
  let r = []
  for (let index in array) {
    r.push(callback(array[index]))
  }
  return r
}

function reduce(array, callback, startingPoint) {
  let r;
  if (startingPoint) {
    r = startingPoint
    for (let index in array) {
      r = callback(array[index], r)
    }
  } else {
    r = array[0]
    for (var i = 1; i < array.length; i++) {
      r = callback(array[i], r)
    }
  }
  return r
}

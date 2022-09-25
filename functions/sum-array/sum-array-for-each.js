const sumArray = (array) => {
  let total = 0
  array.forEach(n => (total += n))
  return total
}

module.exports = {
  fun: sumArray,
  id: 'for each method'
}

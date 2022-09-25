const sumArray = (array) => {
  if (array.length === 0) return 0
  if (array.length === 1) return array[0]

  const [first, ...rest] = array
  return first + sumArray(rest)
}

module.exports = {
  fun: sumArray,
  id: 'simple recursion'
}

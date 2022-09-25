const sumArray = (array, total = 0) => {
  if (array.length === 0) return total
  if (array.length === 1) return total + array[0]

  const [first, ...rest] = array
  return sumArray(rest, total + first)
}

module.exports = {
  fun: sumArray,
  id: 'tail call recursion'
}

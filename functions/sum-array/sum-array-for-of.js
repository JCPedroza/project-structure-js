const sumArray = (array) => {
  let total = 0
  for (const num of array) total += num
  return total
}

module.exports = {
  fun: sumArray,
  id: 'for of loop'
}

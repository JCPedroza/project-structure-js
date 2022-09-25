const sumArray = (array) => {
  let total = 0
  let index = 0

  while (index < array.length) {
    total += array[index]
    index++
  }

  return total
}

module.exports = {
  fun: sumArray,
  id: 'while loop'
}

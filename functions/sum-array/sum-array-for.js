const sumArray = (array) => {
  let total = 0

  for (let index = 0; index < array.length; index++) {
    total += array[index]
  }

  return total
}

module.exports = {
  fun: sumArray,
  id: 'for loop'
}

const fibo = (index) => {
  let current = 0
  let next = 1

  for (let count = 0; count < index; count++) {
    [current, next] = [next, next + current]
  }

  return current
}

module.exports = {
  fun: fibo,
  id: 'for loop'
}

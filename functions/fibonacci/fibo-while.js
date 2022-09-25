const fibo = (index) => {
  let current = 0
  let next = 1
  let idx = 0

  while (idx < index) {
    [current, next] = [next, next + current]
    idx++
  }

  return current
}

module.exports = {
  fun: fibo,
  id: 'while loop'
}

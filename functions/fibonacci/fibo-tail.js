const fibo = (index, current = 0, next = 1, idx = 0) => {
  if (idx >= index) return current
  return fibo(index, next, next + current, idx + 1)
}

module.exports = {
  fun: fibo,
  id: 'tail call recursion'
}

const fibo = (index) => {
  const memo = [0, 1]

  const loop = (idx) => {
    memo[idx] ??= loop(idx - 1) + loop(idx - 2)
    return memo[idx]
  }

  return loop(index)
}

module.exports = {
  fun: fibo,
  id: 'simple recursion and memoization with array'
}

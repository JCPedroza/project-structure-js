const fibo = (index) => {
  const memo = new Map()
  memo.set(0, 0)
  memo.set(1, 1)

  const loop = (idx) => {
    if (memo.has(idx)) return memo.get(idx)
    memo.set(idx, loop(idx - 1) + loop(idx - 2))
    return memo.get(idx)
  }

  return loop(index)
}

module.exports = {
  fun: fibo,
  id: 'simple recursion and memoization with map'
}

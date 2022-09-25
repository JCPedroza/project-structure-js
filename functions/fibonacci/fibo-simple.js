const fibo = (index) =>
  index < 2
    ? index
    : fibo(index - 1) + fibo(index - 2)

module.exports = {
  fun: fibo,
  id: 'simple recursion'
}

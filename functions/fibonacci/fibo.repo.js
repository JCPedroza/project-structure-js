const functions = [
  require('./fibo-dummy'),
  require('./fibo-direct'),
  require('./fibo-for'),
  require('./fibo-simple-memo-array'),
  require('./fibo-simple-memo-literal'),
  require('./fibo-simple-memo-map'),
  require('./fibo-simple'),
  require('./fibo-tail'),
  require('./fibo-while')
]

const fastFunctions = [
  require('./fibo-dummy'),
  require('./fibo-direct'),
  require('./fibo-for'),
  require('./fibo-simple-memo-array'),
  require('./fibo-simple-memo-literal'),
  require('./fibo-simple-memo-map'),
  require('./fibo-tail'),
  require('./fibo-while')
]

module.exports = {
  functions,
  fastFunctions
}

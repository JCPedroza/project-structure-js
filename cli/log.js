const chalk = require('chalk')

/**
 * Alias for console.log.
 */
const log = console.log

const print = (str) => log(chalk.blue(str))

module.exports = {
  print
}

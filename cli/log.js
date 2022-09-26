const chalk = require('chalk')

/**
 * Alias for console.log.
 */
const log = console.log

/**
 * Map a level value with a log procedure.
 */
const levels = {
  0: str => log(chalk.green(`\n${str}`)),
  1: str => log(chalk.red(`  ${str}`)),
  2: str => log(chalk.blue(`    ${str}`)),
  3: str => log(`      ${str}`)
}

/**
 * Print a string at a givel priority level.
 * @param {string} str String to print.
 * @param {number} lvl Priority level.
 */
const print = (str, lvl) => levels[lvl](str)

module.exports = {
  print
}

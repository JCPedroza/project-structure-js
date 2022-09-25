const { hrtime } = require('process')

/**
 * Shuffle array in-place.
 * @param {any[]} arr Array to be shuffled.
 * @returns {any[]} Reference to the shuffled array.
 */
const shuffleArray = (arr) => {
  for (let idx = arr.length - 1; idx > 0; idx--) {
    const rndIdx = Math.floor(Math.random() * (idx + 1))
    ;[arr[idx], arr[rndIdx]] = [arr[rndIdx], arr[idx]]
  }

  return arr
}

/**
 * Measure the runtime of a function in nanoseconds.
 * @param {function} fun Function to be timed.
 * @param {any} arg The function's argument.
 * @returns {bigint} Function runtime in nanoseconds.
 */
const time = (fun, arg) => {
  const start = hrtime.bigint()
  fun(arg)
  return hrtime.bigint() - start
}

/**
 * Measure the runtime of a function when called sequentially with different
 * arguments, in nanoseconds.
 * @param {funcion} fun Function to be timed.
 * @param {any[]} args Arguments to be applied to the function.
 * @param {number} timeReps Number of function call repetitions.
 * @param {number} argsReps Number of argument run repetitions.
 * @param {boolean} shuffle Will the args array be shuffled between runs?
 * @returns {object} Timing results.
 */
const timeArgs = (fun, args, argsReps = 1, shuffle = true) => {
  const intArgsReps = parseInt(argsReps)
  let total = 0n
  let min

  for (let aRep = 0; aRep < intArgsReps; aRep++) {
    if (shuffle) shuffleArray(args)
    let nowMin = 0n

    for (const arg of args) {
      const timeResult = time(fun, arg)
      nowMin += timeResult
      total += timeResult
    }

    min ??= nowMin
    if (nowMin < min) min = nowMin
  }

  return {
    min,
    avg: total / BigInt(intArgsReps)
  }
}

/**
 * Measure the runtime of multiple functions when called sequentially with
 * different arguments, in nanoseconds.
 * @param {funcion[]} funs Functions to be timed.
 * @param {any[]} args Arguments to be applied to the functions.
 * @param {number} argsReps Number of argument run repetitions.
 * @param {number} funsReps Number of function run repetitions.
 * @param {boolean} shuffle Will the funs and args arrays be shuffled
 * between runs?
 * @returns {object} Timing results.
 */
const timeFuns = (
  funs,
  args,
  argsReps = 1,
  funsReps = 1,
  shuffle = true
) => {
  const argsResults = {}

  for (let fRep = 0; fRep < funsReps; fRep++) {
    if (shuffle) shuffleArray(funs)
    for (const { fun, id } of funs) {
      argsResults[id] ??= []
      argsResults[id].push(timeArgs(fun, args, argsReps, shuffle))
    }
  }

  return {
    funs,
    args,
    argsReps,
    funsReps,
    argsResults
  }
}

module.exports = {
  time,
  timeArgs,
  timeFuns
}

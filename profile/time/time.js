const { hrtime } = require('process')
const { print } = require('../../cli/log')

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
  print(`      running ${fun.id}(${arg})`)

  const start = hrtime.bigint()
  fun(arg)
  return hrtime.bigint() - start
}

/**
 * Measure the runtime of a function when called sequentially with different
 * arguments, in nanoseconds.
 * @param {funcion} fun Function to be timed.
 * @param {any[]} args Arguments to be applied to the function.
 * @param {number} reps Number of repetitions.
 * @param {boolean} shuffle Shuffle arrays between runs.
 * @returns {object} Timing results in nanoseconds.
 */
const timeArgs = (fun, args, reps = 1, shuffle = true) => {
  print(`    ${fun.id}`)

  const intReps = parseInt(reps)
  let total = 0n
  let min

  for (let rep = 0; rep < intReps; rep++) {
    if (shuffle) shuffleArray(args)
    let nowMin = 0n

    for (const arg of args) {
      const result = time(fun, arg)
      nowMin += result
      total += result
    }

    min ??= nowMin
    if (nowMin < min) min = nowMin
  }

  return {
    min,
    avg: total / BigInt(intReps)
  }
}

/**
 * Measure the runtime of multiple functions when called sequentially with
 * different arguments, in nanoseconds.
 * @param {funcion[]} funs Functions to be timed.
 * @param {any[]} args Arguments to be applied to the functions.
 * @param {number} reps Number of repetitions.
 * @param {boolean} shuffle Shuffle arrays between runs.
 * @returns {object} Timing results in nanoseconds.
 */
const timeFuns = (funs, args, reps = 1, shuffle = true) => {
  print(`\nTiming ${funs.length} funs ${reps} times with shuffle = ${shuffle}`)
  const times = {}
  const intReps = parseInt(reps)

  for (let rep = 0; rep < intReps; rep++) {
    if (shuffle) shuffleArray(funs)

    for (const { fun, id } of funs) {
      print(`  ${id}`)
      const { min, avg } = timeArgs(fun, args, intReps, shuffle)

      times[id] ??= { min, avg: 0n }
      times[id].min = min < times[id].min ? min : times[id].min
      times[id].avg += avg / BigInt(intReps)
    }
  }

  return times
}

module.exports = {
  time,
  timeArgs,
  timeFuns
}

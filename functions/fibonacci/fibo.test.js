/**
 * You normally need much fewer unit tests, but since the focus of this project
 * is profiling, more unit tests are added to accentuate the timing differences
 * between implementations.
 *
 * Number.MAX_SAFE_INTEGER is 9_007_199_254_740_991
 * fun(78) is                 8_944_394_323_791_464
 * fun(79) would be          14_472_334_024_676_221
 * So the max value that can be accurately computed using the number type is
 * fun(78), but bigger values can be computed using the big int type.
 */

const { functions, fastFunctions } = require('./fibo.repo')

for (const { fun, id } of functions) {
  describe(`Fibonacci algorithm "${id}"`, () => {
    it('computes the nth non-negative fibonacci number', () => {
      expect(fun(0)).toBe(0)
      expect(fun(1)).toBe(1)
      expect(fun(2)).toBe(1)
      expect(fun(3)).toBe(2)
      expect(fun(4)).toBe(3)
      expect(fun(5)).toBe(5)
      expect(fun(6)).toBe(8)
      expect(fun(7)).toBe(13)
      expect(fun(10)).toBe(55)
      expect(fun(18)).toBe(2_584)
      expect(fun(19)).toBe(4_181)
      expect(fun(25)).toBe(75_025)
      expect(fun(30)).toBe(832_040)
      expect(fun(33)).toBe(3_524_578)
      expect(fun(35)).toBe(9_227_465)
      expect(fun(40)).toBe(102_334_155)
    })
  })
}

for (const { fun, id } of fastFunctions) {
  describe(`Fast Fibonacci algorithm "${id}"`, () => {
    it(' ! computes big non-negative fibonacci numbers', () => {
      expect(fun(45)).toBe(1_134_903_170)
      expect(fun(50)).toBe(12_586_269_025)
      expect(fun(55)).toBe(139_583_862_445)
      expect(fun(60)).toBe(1_548_008_755_920)
      expect(fun(65)).toBe(17_167_680_177_565)
      expect(fun(70)).toBe(190_392_490_709_135)
      expect(fun(75)).toBe(2_111_485_077_978_050)
      expect(fun(78)).toBe(8_944_394_323_791_464) // Can't go bigger accurately
      // Bigger values are not all represented
    })
  })
}

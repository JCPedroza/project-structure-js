/**
 * You normally need much fewer unit tests, but since the focus of this project
 * is profiling, more unit tests are added to accentuate the timing differences
 * between implementations.
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
    })
  })
}

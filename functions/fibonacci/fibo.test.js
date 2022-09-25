const functions = require('./fibo.repo')

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
      expect(fun(40)).toBe(102_334_155)
    })
  })
}

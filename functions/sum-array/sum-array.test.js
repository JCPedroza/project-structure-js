const functions = require('./sum-array.repo')

for (const { fun, id } of functions) {
  describe(`Array sum algorithm "${id}"`, () => {
    it('sums an array of integers', () => {
      expect(fun([5])).toBe(5)
      expect(fun([5, 10])).toBe(15)
      expect(fun([-15, 10, 5])).toBe(0)
    })

    it('sum of empty array is zero', () => {
      expect(fun([])).toBe(0)
    })
  })
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter(v => v > 5)
  .map(v => String(v))
  .reduce((s, v) => s += v, '')




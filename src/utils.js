const randomCache = new Map()

export function random(min, max) {
  if (randomCache.get(min + max)) {
    return randomCache.get(min + max)
  }

  min = Math.ceil(min)
  max = Math.floor(max)
  const result = Math.floor(Math.random() * (max - min + 1)) + min

  randomCache.set(min + max, result)

  return result
}

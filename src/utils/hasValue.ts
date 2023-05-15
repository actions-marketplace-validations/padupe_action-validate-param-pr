export function hasValue(body: string, value: string) {
  const result = body.split(/\r?\n/).some(line => line.includes(value))

  return result
}

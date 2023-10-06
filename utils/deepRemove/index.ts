export function deepRemove (data: any, keys: string[]): any {
  if (Array.isArray(data)) {
    return data.map(el => deepRemove(el, keys))
  }

  if (typeof data === 'object') {
    const newObj: any = {}

    for (const key in data) {
      if (Object.hasOwn(data, key) && !keys.includes(key)) {
        newObj[key] = deepRemove(data[key], keys)
      }
    }

    return newObj
  }

  return data
}

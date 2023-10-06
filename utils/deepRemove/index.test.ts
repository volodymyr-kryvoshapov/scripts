import { deepRemove } from './index'

describe('fn deepRemove()', () => {
  it('should return valida data', () => {
    const obj = {
      a: 1,
      b: 2,
      g: 3,
      c: {
        d: 4,
        e: {
          f: 5,
          g: 6,
          a: 7
        }
      },
      h: [8, 9],
      i: [
        {
          a: 1,
          b: 2
        },
        {
          c: 1,
          d: 2,
          g: 3
        }
      ]
    }
    const copy = deepRemove(obj, ['a', 'g'])

    expect(obj).not.toBe(copy)
    expect(obj.c).not.toBe(copy.c)
    expect(obj.c.e).not.toBe(copy.c.e)
    expect(obj.h).not.toBe(copy.h)

    expect(copy.a).toBe(undefined)
    expect(copy.b).toBe(2)
    expect(copy.g).toBe(undefined)
    expect(copy.c.e.f).toBe(5)
    expect(copy.c.e.a).toBe(undefined)
    expect(copy.c.e.g).toBe(undefined)
    expect(copy.h).toEqual([8, 9])
    expect(copy.i[0].a).toBe(undefined)
    expect(copy.i[0].b).toBe(2)
    expect(copy.i[1].g).toBe(undefined)
    expect(copy.i[1].d).toBe(2)
  })
})

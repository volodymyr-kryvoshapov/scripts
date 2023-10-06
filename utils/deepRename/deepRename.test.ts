import { deepRename } from './deepRename';

describe('fn deepRename()', () => {
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
          a: 7,
        },
      },
      h: [8, 9],
      i: [
        {
          a: 1,
          b: 2,
        },
        {
          c: 1,
          d: 2,
          g: 3,
        },
      ],
    };
    const copy = deepRename(obj, {
      a: { newName: 'a2', newValue: 88 },
      g: { newName: 'g2', newValue: 33 },
    });

    expect(obj).not.toBe(copy);
    expect(obj.c).not.toBe(copy.c);
    expect(obj.c.e).not.toBe(copy.c.e);
    expect(obj.h).not.toBe(copy.h);
    expect(obj.a).toBe(1);
    expect(copy.a).toBe(undefined);
    expect(copy.a2).toBe(88);
    expect(copy.c.e.a).toBe(undefined);
    expect(copy.c.e.a2).toBe(88);
    expect(copy.g).toBe(undefined);
    expect(copy.g2).toBe(33);
    expect(copy.c.e.g).toBe(undefined);
    expect(copy.c.e.g2).toBe(33);
    expect(copy.i[0].a).toBe(undefined);
    expect(copy.i[0].a2).toBe(88);
    expect(copy.i[1].g).toBe(undefined);
    expect(copy.i[1].g2).toBe(33);
  });
});

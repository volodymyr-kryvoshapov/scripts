import { guessBoolean } from './guessBoolean';

describe('guessBoolean', () => {
  it('must return true on true boolean', () => {
    expect(guessBoolean(true)).toEqual(true);
  });
  it('must return true on any number different from zero', () => {
    expect(guessBoolean(1)).toEqual(true);
    expect(guessBoolean(-1)).toEqual(true);
    expect(guessBoolean(10)).toEqual(true);
  });
  it('must return true if "true" string', () => {
    expect(guessBoolean('true')).toEqual(true);
  });
  it('must return true if "yes" string', () => {
    expect(guessBoolean('yes')).toEqual(true);
  });
  it('must return true on "1" string', () => {
    expect(guessBoolean('1')).toEqual(true);
  });
  it('must be case insensitive', () => {
    expect(guessBoolean('True')).toEqual(true);
    expect(guessBoolean('TRUE')).toEqual(true);
  });
  it('must trim empty spaces', () => {
    expect(guessBoolean(' yes ')).toEqual(true);
    expect(guessBoolean('  yes  ')).toEqual(true);
    expect(guessBoolean('   yes   ')).toEqual(true);
  });

  it('must return false on false boolean', () => {
    expect(guessBoolean(false)).toEqual(false);
  });
  it('must return false on "any other string then in above test" string', () => {
    expect(guessBoolean('0')).toEqual(false);
    expect(guessBoolean('any other string')).toEqual(false);
  });
  it('must return false on empty string', () => {
    expect(guessBoolean('')).toEqual(false);
  });
});

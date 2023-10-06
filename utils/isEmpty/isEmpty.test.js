import { isEmpty } from './isEmpty';

describe('isEmpty', () => {
  it('must return true on empty string', () => {
    expect(isEmpty('')).toEqual(true);
  });
  it('must return true on NaN', () => {
    expect(isEmpty(Number.NaN)).toEqual(true);
  });
  it('must return true on null', () => {
    expect(isEmpty(null)).toEqual(true);
  });
  it('must return true on undefined', () => {
    expect(isEmpty(undefined)).toEqual(true);
  });
  it('must return false on "0"', () => {
    expect(isEmpty('0')).toEqual(false);
  });
  it('must return false on "null"', () => {
    expect(isEmpty('null')).toEqual(false);
  });
  it('must return false on "undefined"', () => {
    expect(isEmpty('undefined')).toEqual(false);
  });
  it('must return false on 0', () => {
    expect(isEmpty(0)).toEqual(false);
  });
  it('must return false on number', () => {
    expect(isEmpty(8)).toEqual(false);
  });
  it('must return true if all arguments empty', () => {
    expect(isEmpty(null, undefined, '')).toEqual(true);
  });
  it('must return false if at least one argument not empty', () => {
    expect(isEmpty(null, undefined, '', 0)).toEqual(false);
    expect(isEmpty(0, null, undefined, '')).toEqual(false);
  });
  it('must throw Error if no arguments was provided', () => {
    expect(() => isEmpty()).toThrowError('You must provide at least one argument');
  });
});

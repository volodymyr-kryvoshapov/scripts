function empty(value: any): boolean {
  return (typeof value === 'string' && !value.trim())
    || typeof value === 'undefined'
    || value === null;
}

/**
 * Validate that all arguments empty string or undefined or null
 * if at least one argument not empty - return false
 *
 * @example
 * isEmpty('') -> true
 * isEmpty(null) -> true
 * isEmpty(undefined) -> true
 * isEmpty('', null) -> true
 * isEmpty(0) -> false
 * isEmpty('', 'xxx') -> false
 *
 * @param {*} args
 * @returns {boolean}
 * @throws Error
 */
export function isEmpty(...args: any[]): boolean {
  if (!args.length) {
    throw new Error('You must provide at least one argument');
  }

  return args.every(empty);
}

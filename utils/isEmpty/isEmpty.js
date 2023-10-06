function empty(value) {
  return (typeof value === 'string' && !value.trim())
    || typeof value === 'undefined'
    || value === null
    || Number.isNaN(value);
}

/**
 * Validate that all arguments empty string or undefined or null
 * if at least one argument not empty - return false
 *
 * @example
 * isEmpty('') -> true
 * isEmpty(0) -> false
 * isEmpty('', null, 'qwerty') -> false
 *
 * @param {*} args
 * @returns {boolean}
 * @throws Error
 */
export function isEmpty(...args) {
  if (!args.length) {
    throw new Error('You must provide at least one argument');
  }

  return args.every(empty);
}

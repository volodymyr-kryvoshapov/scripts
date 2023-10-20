/**
 * Guesses a boolean value from a given value.
 *
 * @example
 * guessBoolean('true') -> true
 * guessBoolean('True') -> true
 * guessBoolean('TRUE') -> true
 * guessBoolean('yes') -> true
 * guessBoolean('1') -> true
 * guessBoolean('any other string') -> false
 * guessBoolean(true) -> true
 * guessBoolean(false) -> false
 * guessBoolean(1) -> true
 * guessBoolean(0) -> false
 * guessBoolean([]) -> false
 * guessBoolean({}) -> false
 */
export function guessBoolean(value: any): boolean {
    if (typeof value === 'boolean') {
        return value;
    }
    if (value === null || value === undefined) {
        return false;
    }
    if (typeof value === 'string') {
        return ['true', 'yes', '1'].includes(value.trim().toLowerCase());
    }
    if (Array.isArray(value) && !value.length) {
        return false;
    }
    if (typeof value === 'object' && !Object.keys(value).length) {
        return false;
    }

    return Boolean(value);
}

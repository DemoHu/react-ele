export function objectMap(obj, fn) {
    const keys = Object.keys(obj);
    if (typeof keys === 'undefined' || keys.length === 0) {
      return [];
    }
    return keys.map((key) => fn(obj[key], key))
  }


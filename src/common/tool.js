export function objectMap(obj, fn) {
    const keys = Object.keys(obj);
    if (typeof keys === 'undefined' || keys.length === 0) {
      return [];
    }
    return keys.map((key) => fn(obj[key], key))
  }

export function length(obj) {
  if (obj === undefined || obj === null) {
    return 0;
  } else {
    if (typeof(obj) === 'object' && obj.length === undefined) {
      obj = Object.values(obj);
    }
  }
  return obj.length;
}
export function sortgroupcity(data) {
  let sortobj = {};
  for (let i = 65; i <= 90; i++) {
    if (data[String.fromCharCode(i)]) {
      sortobj[String.fromCharCode(i)] = data[String.fromCharCode(i)];
    }
  }
  return sortobj
}

export default {
  sortgroupcity,
  length,
  objectMap,
}
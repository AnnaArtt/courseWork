export function deleteEmptyKey(obj: object) {
  for (const key in obj) {
    let element = Object.values(obj[key]);
    if (element.length == 0) {
      delete obj[key];
    }
  }
  return obj;
}

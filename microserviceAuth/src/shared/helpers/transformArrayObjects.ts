export function transformArrayObjects(objArray: object[]) {
  let transformedArray = [];

  objArray.forEach((item) => {
    transformedArray.push(...Object.values(item));
  });
  return transformedArray;
}

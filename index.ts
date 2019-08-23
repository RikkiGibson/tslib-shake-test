export function f1(obj1: any, obj2: any) {
  return { ...obj1, ...obj2, foo: 'bar' };
}
f1({}, {});

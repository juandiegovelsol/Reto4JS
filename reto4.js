console.log(myFunction({ a: 1 }));
console.log(myFunction({ a: { b: { c: 3 } } }));
console.log(myFunction({ b: { a: 1 } }));
console.log(myFunction({ a: { b: 2 } }));
function myFunction(obj) {
  if (obj["a"]) {
    const obja = obj["a"];
    if (obja["b"]) {
      return obja["b"];
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

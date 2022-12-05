console.log(myFunction({ a: 1 }));
console.log(myFunction({ a: { b: { c: 3 } } }));
console.log(myFunction({ b: { a: 1 } }));
console.log(myFunction({ a: { b: 2 } }));
function myFunction(obj) {
  //Con optional chaining se puede hacer el ejercicio de una forma mucho mas sencilla
  const value = obj.a?.b;
  return value;
  //Esta es la anterior forma que se puede hacer, cumplen la misma funcion
  /* if (obj.a) {
    if (obj.a.b) {
      return obj.a.b;
    }
    return undefined;
  }
  return undefined; */
}

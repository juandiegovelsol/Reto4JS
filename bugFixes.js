console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([true, false, true]));
function clone(arr) {
  arr.push(arr.map((x) => x));
  return arr;
}

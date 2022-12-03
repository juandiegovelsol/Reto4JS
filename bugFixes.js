console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));
console.log(clone([true, false, true]));
function clone(arr) {
  let arr1 = JSON.parse(JSON.stringify(arr));
  arr.push(arr1);
  return arr;
}

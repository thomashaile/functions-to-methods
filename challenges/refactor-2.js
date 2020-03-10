
// refactor this function into a method
const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
}

const obj = {
  array: [3],
  mergeArrays: function (arrToMerge) { }
}

obj.mergeArrays([2]);
console.assert(obj.array[0] === 3, 'Test 1');
console.assert(obj.array[1] === 2, 'Test 2');

obj.mergeArrays(obj.array);
console.assert(obj.array[0] === 3, 'Test 3');
console.assert(obj.array[1] === 2, 'Test 4');
console.assert(obj.array[2] === 3, 'Test 5');
console.assert(obj.array[3] === 2, 'Test 6');

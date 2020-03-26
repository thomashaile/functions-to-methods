// refactor this function into a method
const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const obj = {
    array: [3],
    mergeArrays: function(arrToMerge) {
        return [...this.array, ...arrToMerge];
    }
}


const merged1 = obj.mergeArrays([2]);
console.assert(merged1[0] === 3, 'Test 1');
console.assert(merged1[1] === 2, 'Test 2');

const merged2 = obj.mergeArrays([2]);
console.assert(merged2[0] === 3, 'Test 3');
console.assert(merged2[1] === 2, 'Test 4');

obj.array = ['hi!'];
const merged3 = obj.mergeArrays(['bye!']);
console.assert(merged3[0] === 'hi!', 'Test 5');
console.assert(merged3[1] === 'bye!', 'Test 6');

const merged4 = obj.mergeArrays(['bye!']);
console.assert(merged4[0] === 'hi!', 'Test 7');
console.assert(merged4[1] === 'bye!', 'Test 8');
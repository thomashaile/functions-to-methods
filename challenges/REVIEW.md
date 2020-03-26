# functions-to-methods/

> 3/26/2020, 8:02:59 PM 

## challenges/ - pass

* [../REVIEW.md](../REVIEW.md)

### files

* [refactor-1.js](#refactor-1js---pass) - pass
* [refactor-2.js](#refactor-2js---pass) - pass
* [refactor-3.js](#refactor-3js---pass) - pass
* [refactor-4.js](#refactor-4js---pass) - pass

---

## refactor-1.js - pass

* [review source](refactor-1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
```

```js
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
```

[TOP](#functions-to-methods)

---

## refactor-2.js - pass

* [review source](refactor-2.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
 // refactor this function into a method
 const mergeArrays = (arr1, arr2) => {
     return [...arr1, ...arr2];
 }

 const obj = {
     array: [3],
     mergeArrays: function(arrToMerge) {
         this.array = [...this.array, ...arrToMerge];
     }
 }


 obj.mergeArrays([2]);
 console.assert(obj.array[0] === 3, 'Test 1');
 console.assert(obj.array[1] === 2, 'Test 2');

 obj.mergeArrays(obj.array);
 console.assert(obj.array[0] === 3, 'Test 3');
 console.assert(obj.array[1] === 2, 'Test 4');
 console.assert(obj.array[2] === 3, 'Test 5');
 console.assert(obj.array[3] === 2, 'Test 6');
```

[TOP](#functions-to-methods)

---

## refactor-3.js - pass

* [review source](refactor-3.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
// refactor this function to a method
const remix = (str, mixer) => {
    return str.split('').join(mixer);
}

const obj = {
    mixer: '',
    remix: function(str) {
        return str.split('').join(this.mixer);
    }
};

console.assert(obj.remix('hello') === 'hello', 'Test 1');

obj.mixer = '-';
console.assert(obj.remix('hello') === 'h-e-l-l-o', 'Test 2');
console.assert(obj.mixer === '-', 'Test 3');
console.assert(obj.remix('hello') === 'h-e-l-l-o', 'Test 4');
```

[TOP](#functions-to-methods)

---

## refactor-4.js - pass

* [review source](refactor-4.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
```

```js
// refactor this function to a method
const remix = (str, mixer) => {
    return str.split('').join(mixer);
}

const obj = {
    mixer: '',
    remixed: '',
    remix: function(str) {
        this.remixed = str.split('').join(this.mixer);
    },
    getRemixed: function() {
        return this.remixed;
    }
};

obj.remix('hello');
console.assert(obj.remixed === 'hello', 'Test 1');

obj.remix('hello');
console.assert(obj.getRemixed() === 'hello', 'Test 2');

obj.mixer = '-';
obj.remix('hello');
console.assert(obj.remixed === 'h-e-l-l-o', 'Test 3');
console.assert(obj.getRemixed() === 'h-e-l-l-o', 'Test 4');
console.assert(obj.mixer === '-', 'Test 5');

obj.mixer = '0';
obj.remix('111');
console.assert(obj.remixed === '10101', 'Test 6');
console.assert(obj.getRemixed() === '10101', 'Test 7');
console.assert(obj.mixer === '0', 'Test 8');
```

[TOP](#functions-to-methods)


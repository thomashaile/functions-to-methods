# functions-to-methods/

> 3/10/2020, 12:24:11 PM 

## examples/ - pass

* [../REVIEW.md](../REVIEW.md)

### files

* [1-write-to-object.js](#1-write-to-objectjs---pass) - pass
* [2-read-from-object.js](#2-read-from-objectjs---pass) - pass
* [3-read-and-write.js](#3-read-and-writejs---pass) - pass
* [4-two-methods.js](#4-two-methodsjs---pass) - pass

---

## 1-write-to-object.js - pass

* [review source](1-write-to-object.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
const sum = (a, b) => {
  return a + b
};
console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');

const obj = {
  result: 0,
  sum: function (a, b) {
    this.result = a + b
  }
}

// methods can "return" values to their objects
obj.sum(3, 4);
console.assert(7 === obj.result, 'Test 3');
obj.sum(5, 4);
console.assert(9 === obj.result, 'Test 4');

```

[TOP](#functions-to-methods)

---

## 2-read-from-object.js - pass

* [review source](2-read-from-object.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
const sum = (a, b) => {
  return a + b
};
console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');

const obj = {
  a: 0,
  sum: function (b) {
    return this.a + b
  }
}

// methods can get "arguments" from their object
obj.a = 3;
console.assert(7 === obj.sum(4), 'Test 3');
obj.a = 5;
console.assert(9 === obj.sum(4), 'Test 4');
    // notice: same argument, different return values!
    // object methods are not always pure functions

```

[TOP](#functions-to-methods)

---

## 3-read-and-write.js - pass

* [review source](3-read-and-write.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
sum = (a, b) => { return a + b };

console.assert(7 === sum(3, 4), 'Test 1');
console.assert(9 === sum(5, 4), 'Test 2');

const obj = {
  a: 0,
  b: 0,
  result: 0,
  sum: function () {
    this.result = this.a + this.b
  }
}

// methods can write values to their objects
obj.a = 3, obj.b = 4;
obj.sum();
console.assert(7 === obj.result, 'Test 3');
obj.a = 5;
obj.sum();
console.assert(9 === obj.result, 'Test 4');

```

[TOP](#functions-to-methods)

---

## 4-two-methods.js - pass

* [review source](4-two-methods.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
```

```js
// pure functions can only get their values by argument
//  and must return their value to the global scope
const pureAdd = (a, b) => {
  return a + b;
}

const result1 = pureAdd(3, 4);
console.assert(result1 === 7, 'Test 1');

// same function, same arguments, same return value
const result2 = pureAdd(3, 4);
console.assert(result2 === 7, 'Test 2');


// methods can also read or save values to their object using 'this'
//  it's sort of like they have back-door access to their object
const obj = {
  a: 0,
  b: 0,
  setAandB: function (a, b) {
    this.a = a;
    this.b = b;
  },
  sumAandB: function () {
    return this.a + this.b;
  }
};

obj.setAandB(3, 4);

const result3 = obj.sumAandB();
console.assert(result3 === 7, 'Test 3');

obj.setAandB(3, 9);

// same method, same arguments, different return value
const result4 = obj.sumAandB();
console.assert(result4 === 12, 'Test 4');

```

[TOP](#functions-to-methods)


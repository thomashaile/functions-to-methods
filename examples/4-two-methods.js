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

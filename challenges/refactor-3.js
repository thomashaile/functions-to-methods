// refactor this function to a method
const remix = (str, mixer) => {
  return str.split('').join(mixer);
}

const obj = {
  mixer: '',
  remix: function (str) { }
};

console.assert(obj.remix('hello') === 'hello', 'Test 1');

obj.mixer = '-';
console.assert(obj.remix('hello') === 'h-e-l-l-o', 'Test 2');
console.assert(obj.mixer === '-', 'Test 3');
console.assert(obj.remix('hello') === 'h-e-l-l-o', 'Test 4');

let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // ["apple", "banana", "cherry"]

//multiple data type:
const arr = [1, 2, 3];
const mixed = [1, "two", true, null];
const empty = [];
console.log(mixed)
//access
console.log(arr[0]); // 1
console.log(arr.length); // 3
//modify
arr[1] = 42;
console.log(arr); // [1, 42, 3]

//Arrays are object:
console.log(typeof arr); // "object"

//access last item 
const colors = ["red", "green", "blue"];
console.log(colors[0]); // red
console.log(colors[2]); // blue
const last = colors[colors.length - 1];
console.log(last); // blue

//neg indexing not supported:
console.log(colors[-1]); // undefined

//loop over array:
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
for (let color of colors) {
  console.log(color);
}

//function(color){}
colors.forEach (function(color) {
    console.log(color)
})

//practice:
const nums = [1, 2, 3, 4];
let sum = 0;
for (let num of nums) {
  sum += num;
}
console.log(sum); // 10

//array methods:
//1. push, pop
let arr = [1, 2];
arr.push(3);   // [1, 2, 3]
arr.pop();     // [1, 2]
//2. shift,unshift:
arr.unshift(0); // [0, 1, 2] // Add 0 to the beginning
arr.shift();    // [1, 2] // Remove the first element

//indexOf, includes
console.log(arr.indexOf(2)); // 1
console.log(arr.includes(3)); // false

//slice
let sliced = arr.slice(0, 1); // [1]
//join and reverse:
console.log(arr.join("-")); // "1-2"
arr.reverse();              // [2, 1]

//map, filter, reduce
let doubled = arr.map(x => x * 2); // [2, 4]
let even = arr.filter(x => x % 2 === 0); // [2]
//array.reduce((accumulator, currentValue) => ..., initialValue)
let total = arr.reduce((acc, val) => acc + val, 0); // 3









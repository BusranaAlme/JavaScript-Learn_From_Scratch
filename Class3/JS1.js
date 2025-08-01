for(let i=0; i<5; i++){
    console.log(i)
}
let i=0;
while(i<5){
    console.log(i)
    i++
}
//for-of (of is must while looping in an array)
const arr = [10, 20, 30];
for (const val of arr) {
  console.log(val);
}
//for-in (must use in for )
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}
//length cant be used for un
l=arr.length
console.log(l)

//String in JS:
let str = "Hello, JavaScript!";
console.log(str.length); // 18
console.log(str[0]);     // H

//Template Literals: Use backticks (``) and ${} for interpolation.

const name = "Alice";
const msg = `Hello, ${name}!`;
console.log(msg); // Hello, Alice!

const poem = `Roses are red,
Violets are blue.`;

console.log(poem)
//string operations:
let str1 = "JavaScript";

console.log(str1.toUpperCase());   // "JAVASCRIPT"
console.log(str1.toLowerCase());   // "javascript"
console.log(str1.includes("Script")); // true
console.log(str1.indexOf("a"));    // 1
console.log(str1.slice(0, 4));     // "Java"
console.log(str1.replace("Java", "Type")); // "TypeScript"
console.log(str1.split("a"));      // ["J", "v", "Script"]
console.log(str1.charAt(4));       // "S"

//'split' make and array:
const sentence = "The quick brown fox";
const words = sentence.split(" ");
for (const word of words) {
  console.log(word.toUpperCase());
}



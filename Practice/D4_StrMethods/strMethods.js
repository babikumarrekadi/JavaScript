// String Methods in JavaScript

// JavaScript provides many built-in string methods to work with text.
// Strings are immutable → methods return a new string.

let data="      Rekadi Babi Kumar"

// 1.length :Returns string length.
console.log(data.length);

// 2.trim():Removes spaces from both ends.
console.log(data.trim());

// 3.trimStart():Removes spaces from the LEFT side only
console.log(data.trimStart());

// 4.trimEnd():Removes spaces from the RIGHT side only
console.log(data.trimEnd());

// 5.includes():Checks if a string contains text.
console.log(data.includes("Babi"));

// 6.slice():Extracts part of a string.
console.log(data.slice(7,11));

// 7.toUpperCase():Converts all letters to small letters.
console.log(data.toLowerCase());

// startsWith() :Checks whether a string starts with a given value.  Returns true or false.
console.log(data.startsWith("Rekadi"));

// endsWith() :Checks whether a string ends with a given value. Returns true or false.
console.log(data.endsWith("Kumar"));



















// String Methods in JavaScript

// JavaScript provides many built-in string methods to work with text.
// Strings are immutable → methods return a new string.

let data="      Rekadi Babi Kumar"

// 1.length :Returns string length.
console.log(data.length);   //23

// 2.trim():Removes spaces from both ends.
console.log(data.trim());   //Rekadi Babi Kumar

// 3.trimStart():Removes spaces from the LEFT side only
console.log(data.trimStart());  //Rekadi Babi Kumar

// 4.trimEnd():Removes spaces from the RIGHT side only
console.log(data.trimEnd());    //      Rekadi Babi Kumar

// 5.includes():Checks if a string contains text.
console.log(data.includes("Babi")); //true

// 6.slice():Extracts part of a string.
console.log(data.slice(7,11));  //ekad

// 8.substring():    Similar to slice (no negative index).
console.log(data.substring(3,15)); //   Rekadi Ba

// 9.toLowerCase():Converts all letters to small letters.
console.log(data.toLowerCase());    //rekadi babi kumar

//10.toUpperCase():Converts all letters to small letters.
console.log(data.toUpperCase());    //REKADI BABI KUMAR


// 10.startsWith() :Checks whether a string starts with a given value.  Returns true or false.
console.log(data.startsWith("Rekadi")); //flase

// 11.endsWith() :Checks whether a string ends with a given value. Returns true or false.
console.log(data.endsWith("Kumar"));    //true

// 12.indexOf():  Finds the first occurrence of a value in a string. Returns the index (position). Returns -1 if not found
console.log(data.indexOf("i")); //11

// 13.lastIndexOf():  Finds the last occurrence of a value. Searches from right to left. Returns the index. Returns -1 if not found
console.log(data.lastIndexOf("K")); //18

// replace():  Replaces only the FIRST occurrence of a value in a string. Returns a new string
console.log(data.replace("Babi","Abi"));    //      Rekadi Abi Kumar

// replaceAll():  Replaces ALL occurrences of a value
let text = "Hi Babi Hi";
console.log(text.replaceAll("Hi", "Hello"));    //Hello Babi Hello

// charAt():   Returns the character at a specific index in a string
console.log(data.charAt(13));   //B

let a = "Hello";
let b = "World";
console.log(a.concat(" ", b)); // Hello World


























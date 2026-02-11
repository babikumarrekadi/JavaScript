// Conditional Statements :
//      Conditional statements are used to make decisions in a program.
//      They execute different blocks of code based on conditions (true or false).
//                        if → Single condition
//                        if-else → Two choices
//                        if-else if → Multiple conditions
//                        switch → Many fixed values
//                        ternary → Short form

// ------------------------------------------------------------------------------------------------------------


// 1. if Statement: Executes code only if the condition is true.

// Syntax:
//       if (condition) {
//           code to execute
//       }

// Example:
let agee = 18;
if (agee >= 18) {
    console.log("You are eligible to vote");
}

// ------------------------------------------------------------------------------------------------------------


// 2. if...else Statement :    Executes one block if condition is true, otherwise another block.

//  Syntax:
//         if (condition) {
//             // true block
//         } else {
//             // false block
//         }

// Example:
let number = 5;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// ------------------------------------------------------------------------------------------------------------


// 3. if...else if...else Statement :  Used when checking multiple conditions.

//  Syntax:
//         if (condition1) {
//             // block 1
//         } else if (condition2) {
//             // block 2
//         } else {
//             // default block
//         }

// Example: 
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// ------------------------------------------------------------------------------------------------------------


// 4. Nested if Statement:     An if statement inside another if.
//  Example:
let ageee = 20;
let hasID = true;

if (ageee >= 18) {
    if (hasID) {
        console.log("Entry allowed");
    } else {
        console.log("ID required");
    }
} else {
    console.log("Not eligible");
}

// ------------------------------------------------------------------------------------------------------------


// 5. switch Statement: Used when checking multiple values of the same variable.

//  Syntax:
// switch (expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // default code
// }

// Example:
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// ------------------------------------------------------------------------------------------------------------


// 6. Ternary Operator (Short if-else):    Short form of if-else.

//  Syntax:
//           condition ? trueValue : falseValue;

// Example
let age = 16;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);





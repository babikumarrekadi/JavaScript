// JavaScript has two main categories of data types:

//  1. Primitive Data Types
// Primitive types store single, simple values.


// Numbers Type:    Used for integers and decimals.
let num=55
console.log(num)


//String type:       Used for text (inside quotes).
let namee = "Babi";
let course="JavaScript"
console.log(namee)
console.log(course)

//boolen type:       Represents true or false.
var valuee=true
var valuee=false
console.log(valuee)

//undefined type:        A variable declared but not assigned a value.

var age
console.log(age)

// Null type:        Represents an intentional empty value.
let clas=null
console.log(clas)

//BigInt:        Used for very large integers.
let lar=54546546546165461646461654n
console.log(lar)

//symbol:     Used to create unique identifiers.
var nam=Symbol(65464)
console.log(nam.description)


// 2. Non-Primitive (Reference) Data Types
// These store multiple values or complex data.

// Object type:         Stores data in key–value pairs
let emp={
    id:2526,
    clgName:"Andhra university",
    location:"Vizag",
    open:true
}
console.log(emp);

console.log(Object.values(emp));
console.log(emp.id)
console.log(emp.clgName)
console.log(emp.location)
console.log(emp.open)

console.log(Object.keys(emp));
console.log(Object.keys(emp)[0]);
console.log(Object.keys(emp)[1]);
console.log(Object.keys(emp)[2]);
console.log(Object.keys(emp)[3]);

console.log(Object.values(emp)[0]);
console.log(Object.values(emp)[1]);
console.log(Object.values(emp)[2]);
console.log(Object.values(emp)[3]);





//Array Type:       Used to store multiple values of different data type
let score=[11,true,"babi",'kumar',50,34]
console.log(score[0])
console.log(score[1])
console.log(score[2])
console.log(score[3])
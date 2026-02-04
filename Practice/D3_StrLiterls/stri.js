// String Literals in JavaScriptm :
//             A string literal is a sequence of characters used to represent text in JavaScript.
//             Strings are written inside quotes.

let details = [
    { name: "Babi", age: 51, loc: "hyd" },
    { name: "naveen", age: 52, loc: "bangl" },
    { name: "praveen", age: 53, loc: "Ap" },
    { name: "raju", age: 34, loc: "koklata" },
    { name: "ram", age: 35, loc: "mumbai" }
]
console.log(details[0].name);
console.log(details[1].loc);


let bike = {
    type:'GT',
    milage:25,
    engineCC:650,
    price:'3.5L'

}
console.log(bike.type);

// String Literals

console.log(`
    i am ${details[0].name}. From ${details[2].loc} rides a ${bike.type} ${bike.engineCC} bike with a ${bike.engineCC}cc engine, priced around ${bike.price}, giving a mileage of ${bike.milage} km/l.
    `);






let a = 7;
let b = '6';
b = parseInt(b, 10); // Coercing string b into an interger
let c = a + b;
console.log('Answer: ' + c);
console.log(typeof c); // prints out the type of variable c
console.log('');
let d = parseInt('bob', 10); // Coercing string bob into an integer
let e = isNaN(d); // Checks if d is Not A Number
console.log(d);
console.log(e);
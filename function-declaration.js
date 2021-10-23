/*function sayHello() {
    console.log('-------------------');
    console.log('hello!');
    console.log('-------------------');
}


sayHello();

let a = sayHello;
a();


function sayHello(name) {
    console.log('-------------------');
    console.log('hello ' + name + '!');
    console.log('-------------------');
}

sayHello('world');
sayHello('bob');
sayHello('Favour');
sayHello('Ibukun');
*/

let amount = 100;
function calculateTax(amount) {
    let result = amount * 0.0825;

    return result;
}

function calculatePrice(amount) {
    let a = amount + calculateTax(amount);

    return a;
}

let total = calculatePrice;

console.log('The tax for a $' + amount + ' purchase is : ' + calculateTax(amount));
console.log('The total amount spent on the purchase is: ' + total(amount));
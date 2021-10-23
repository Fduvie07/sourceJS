/* An Object is a collection of related attributes of a data element */
let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function () {
        // Perform some calc.
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);

// Another way of declaring Arrays
var anotherCar = {} // anotherCar object with undefined property(ies).
anotherCar.whatever = 'bob';
console.log(anotherCar.whatever);

//Other ways of using arrays
var a = {
    myProperty: { b: 'hi'}
};
console.log(a.myProperty.b);
// The above is an object that has a property
// that contains an object that has a property

var c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get' },
        { g: 'crazy' }
    ]
};
/*  The above is an object(c) that contains
    a propery(myProperty), which contains an array of
    objects that each contain a property
*/

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner'},
    { year: 2015, make: 'BMW', model: '528i'},
    { year: 1982, make: 'Buick', model: 'Skylark'}
];
console.log(carLot[1].make);
/*  The above is an array of 3 objects
    that each have 3 properties('year', 'make', 'model')
*/

let contacts = {
    customers: [
        { firstName: 'Bob', lastName: 'Tabor', phoneNumbers: [ '(123) 456-7890', '(123) 567-8901']},
        { firstName: 'Richard', lastName: 'Boughton', phoneNumbers: [ '(123) 555-7890', '(123) 555-8912']},
    ],
    employees: [
        { firstName: 'Steve', lastName: 'Jaworski', phoneNumbers: [ '(312) 456-7890', '(312) 567-8901']},
        { firstName: 'Conrad', lastName: 'Tabor', phoneNumbers: [ '(312) 456-7891']},
        { firstName: 'Grant', lastName: 'Tabor', phoneNumbers: [ '(312) 456-7892']},
    ]
};
console.log(contacts.customers[0].phoneNumbers[1]);
/* If, else if, else decision
var count = 3;
if (count == 4){
    console.log('Count is 4');
} else if (count > 4) {
    console.log('count is greater than 4');
} else if (count < 4) {
    console.log('count is less than 4');
} else {
    console.log('Count is not 4');
} 
*/

/*
//Switch case
let hero = 'Superman';
switch (hero.toLowerCase()) {//toLowerCase() method converts all string to lowercase
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fighting skills');
        break;
    default:
        console.log('member of JLA');
}
*/


//ternary operator
let a = 1, b = '1';
//let result = (a == b) ? 'equal' : 'inequal'; //Checks if a equals b after coercion, if true it prints 'equal' otherwise 'inequal
//let result = (a === b) ? 'equal' : 'inequal';//Checks if a absolutely equals b without coercion.
let result = (a !== b) ? 'not equal' : 'equal';
console.log(result);
//console.log((a == b) ? 'equal' : 'inequal');

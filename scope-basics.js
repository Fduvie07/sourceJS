/* 
    It is good to understand where your 
    variables are defined.
    Based on where they are defined, 
    they will have a lifespan and citizenship 
    based on where they were declared
    ===========================================
    If a variable is defined in the outermost scope,
    It will have citizenship in all other innermost scopes.
    If a variable is defined in the innermost scope,
    It will lose citizenship in the outermost scopes.
*/

let a = 'first'; //Declared variable out of the function

function scopeTest() {
    console.log(a); //Function can be brought into the function
    a = 'changed';

    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('inside if: ' + b);
        let c = 'third';
    }

    //console.log(c);

    //let b = 'second'; //Declared variable in a function. Out of scope outside the function.
}

scopeTest();
// console.log(b);
console.log(a);
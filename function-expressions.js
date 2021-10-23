/* Function Expression
setTimeout(function() {
    console.log("I waited 2 seconds!"); 
}, 5000);//This runs the function after a set time of 5000ms || 5seconds.
*/

/*Function declaration and Function expression
let counter = 0;
function timeout() {//Creates a funtion Timeout
    setTimeout(function() { //Creates a function with two arguments, a function expresion and 2000
        console.log('Hi ' + counter++);//Prints out hi and also counts the number of times the function has been called
        timeout(); //Calls the timeout function
    }, 2000);// Sets it to run every 2000ms or 2seconds
}

timeout();
// Ctrl + c 
*/

//Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('Immediately Invoked Function Expression (IIFE)');
})();
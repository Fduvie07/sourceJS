function sayHello(name) {
    return function() {
        console.log('Howdy ' + name);
    }
}

let bob = sayHello('bob');

bob();
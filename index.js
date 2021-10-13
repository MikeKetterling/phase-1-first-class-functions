function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    
    return function aFunction(){};
}

// returnsAnAnonymousFunction(function () {
//     return returnsAnAnonymousFunction();
// });

function returnsAnAnonymousFunction() {
    return function () {};
}
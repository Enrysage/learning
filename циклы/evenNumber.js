//"use strict"

function createCounter() {
   let counter=0;
    return function () { return ++ counter};
}


var counter1 = createCounter();
var counter2 = createCounter();
console.log(counter1);
console.log(counter2);
console.log(counter1() + counter2() + counter1());
console.log(+counter1)
console.log(+counter2)
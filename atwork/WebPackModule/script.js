'use stric';

const number = 1;

(function() {
    let number = 2;
    number += 2;
    console.log(number);
}());

console.log(number);

const user = (function () {
    const privat = function() {
        console.log(`I'm Private Function !`);
    };

    return {
        sayHello: privat
    };
}());


user.sayHello();
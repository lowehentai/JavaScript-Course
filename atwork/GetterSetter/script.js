'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() { // Show Value
        return this.age;
    },

    set userAge(num) { // Change Value
        this.age = num;
    }
};

// console.log(persone.userAge = 80);
console.log(persone.userAge);
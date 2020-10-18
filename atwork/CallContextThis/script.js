'use strict';

// const obj = {
//     name: 'hentai',
//     age: 12,
//     func: function () {
//         console.log(this);

//         const naame = {
//             su: 12
//         };
//         const say = function () {
//             console.log(this);
//         };


//         say();
//     }
// };

// obj.func();


function sayName(surname) {
    console.log(this);
    console.log(this.name + " " + surname);
}

const user = {
    name: 'Hentai'
};

sayName.call(user, 'Hentaiovic');
sayName.apply(user, ['Hentaiovic']); //Syntx variable !



// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);

// console.log(double(5));

//call, apply, bind 

"use stric";
// window.addEventListener('DOMContentLoaded', function () {
//     console.log(typeof(null));
//     const human = {
//         name: 'Denis',
//         age: '18',
//         surname: 'Isaev'
//     };
//     let x = '00000000000000000000000000000000';
//     console.log(x.length);
//     alert(`Hello, ${human.name}, Your surname: ${human.surname} And age: ${human.age}`);
// });

// const myObj = {
//     name: 'Hentai',
//     age: 18,
//     favorite: 'Ecchi',
//     private: true,
//     anime: {
//         first: 'DXD',
//         second: 'Overlord',
//         series: {
//             onepuchman: 'first season',
//             onepuchman2: 'second season'
//         }
//     }
// };
// let i = 0,
//     a = 0,
//     inob = 0;
// for (let x in myObj) {
//     if (typeof (myObj[x]) !== 'object') {
//         i++;
//     } else if (typeof (myObj[x]) === 'object') {
//         a++;
//     }
// }
// console.log(`Normal element count: ${i}, Object element count: ${a}`);

// for (let x in myObj) {
//     if (typeof (myObj[x]) === 'object') {

//         for (let z in myObj[x]) {
//             if (typeof (myObj[x][z]) === 'object') {

//                 for (let q in myObj[x][z]) {
//                     console.log(`Element in Object gen2: '${myObj[x][z][q]}'`);
//                 }
//             }
//             console.log(`Element in Object: '${z}' => in '${myObj[x][z]}'`);
//         }
//     }
//     console.log(`Svoystvo '${x}' in '${myObj[x]}' -`);
// }





// const myObj = {
//     x: 5,
//     z: 1,
//     c: {
//         h: 6,
//         g: 2
//     }
// };

// function copy(useObj) {
//     let myObject = {};

//     let key;
//     for (key in useObj) {
//         myObject[key] = useObj[key];
//     }
//     return myObject;
// }

// let newObj = {};

// newObj = copy(myObj);

// const heObj = {
//     banzai: 12,
//     post: 'Hentai',
//     add: {
//         hentai: true,
//         ecchi: true
//     }
// };

// let newObject = {};

// newObject = {...heObj}; //spread operator ES9!

// newObject.post = 'ecchi';

// console.log(newObject);
// console.log(heObj);


// const clone = Object.assign({}, heObj);
// clone.add.ecchi = false;
// console.log(clone.add);
// console.log(heObj.add);




// const oldArray = ['a', 'b', 'c'];

// const newArray = oldArray.slice();
// // const newArray = [...oldArray];

// newArray[1] = 'pushing start';

// console.log(newArray);
// console.log(oldArray);










// // OOP prototype 

// const human = {
//     health: 100
// };

// const solider = {
//     armor: {
//         status: true,
//         strength: 100
//     },
//     gun: {
//         name: 'M16',
//         ammunation: 120,
//         inTheClip: 30,
//         inShutter: 1,
//         allAmmunation: function () {
//             let ammunation = this.ammunation,
//                 inTheClip = this.inTheClip,
//                 inShutter = this.inShutter,
//                 x = ammunation + inTheClip + inShutter;

//             return x;
//         }
//     }
// };


// const john = Object.create(solider);

// Object.setPrototypeOf(solider, human);

// console.log(john);

// console.log(solider.gun.allAmmunation());










//Quests

// let x = 5;
// alert(x++);

// if ([] + false - null + true) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// let y = 1;
// let x = y = 2;
// alert(x);

// console.log([] + 1 + 2);

// console.log("1023"[0]);

// console.log(2 && 1 && null && 0 && undefined);

// console.log(null || 2 && 3 || 4);



//DOM elements


// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// // for (let i = 0; i < btns.length; i++) {
//     console.log(btns);
//     // console.log(btns[0]);
// // }

// const circles = document.getElementsByClassName('circle');

// console.log(circles);


// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
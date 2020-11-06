'use strict';

// new RegExp('pattern', 'flags');

// /pattern/f


// const ans = prompt('Please Enter Your Name : ');

// const res = /n/ig;

// \D
// \W
// \S

// \d
// \w
// \s

// i
// g
// m

// console.log(ans.search(res));
// console.log(ans.match(res));


// const pass = prompt('Please Enter You Password :');

// let orj = pass.slice(0, 2);
// let Slice = pass.slice(2).replace(/./g, '*');
// console.log(orj + Slice);

// console.log('Hentai - Ecchi - Garem'.replace(/-/g, ':'));




// const ans = prompt('Please Enter Your Name : ');

// const res = /n/ig;

// console.log(res.test(ans));

// console.log(ans.match(/\d/));


const str = 'My name is "R2D2"';

console.log(str.match(/\w\d\w\d/));
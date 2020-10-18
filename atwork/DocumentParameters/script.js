'use strict';

const box = document.querySelector('.box'),
    button = document.querySelector('button'),
    block = document.querySelector('.block'),
    body = document.querySelector('body');

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// const width = box.scrollWidth;
// const height = box.scrollHeight;


// button.addEventListener('click', () => {
//     box.style.height = height + 20 + 'px';
// });

let counter = 0;
box.addEventListener('scroll', () =>{
    counter = Math.floor(box.scrollTop);
    console.log(counter);
    block.style.width = counter + 'px';
});
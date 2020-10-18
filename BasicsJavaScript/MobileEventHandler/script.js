const body = document.querySelector('.body'),
    block = document.querySelector('.block');

body.addEventListener('touchstart', (e) => {
    e.preventDefault();

    body.style.cssText = 'background-color: yellow;';
});

body.addEventListener('touchmove', (e) => {
    e.preventDefault();

    body.style.cssText = 'background-color: black;';
});

body.addEventListener('touchend', (e) => {
    e.preventDefault();

    body.style.cssText = 'background-color: red;';
});

// body.addEventListener('touchcancel', (e) => {
//     e.preventDefault();

//     body.style.cssText = 'background-color: gray;';
//     block.style.cssText = 'background-color: gray;';
// });

// block.addEventListener('touchenter', (e) => {
//     e.preventDefault();

//     block.style.cssText = 'background-color: aqua;';
// });

// block.addEventListener('touchleave', (e) => {
//     e.preventDefault();

//     block.style.cssText = 'background-color: gray;';
// });

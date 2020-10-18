// const box = document.querySelector('.box');
// timerId = setTimeout(moveButton, 2000);


// box.addEventListener('click', () => {
//     clearInterval(timerId);
// });

// let x = 0;

// function moveButton() {
//     setInterval(() => {
//         x += 2;
//         if (x <= 200) {
//             box.style.cssText = `margin-left: ${x}px`;
//         }
//         console.log(x);
//     }, 50);
// }

// let id = setTimeout(function log() {
//     console.log('start');
//     id = setTimeout(log, 5000);
//     console.log('end');
// }, 2000);


// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0,
//         back = false;

//     function frame() {
//         if (false) {
//             clearInterval();
//         } else {
//             if (pos <= 300 && !back) {
//                 pos += 2;
//             } else if (pos == 0) {
//                 back = false;
//             } else if (back) {
//                 pos -= 2;
//             } else {
//                 back = true;
//             }
//             elem.style.top = `${pos}px`;
//             elem.style.left = `${pos}px`;
//         }
//     }
//     setInterval(frame, 200);
// }
const btn = document.querySelector('.btn');

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos >= 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = `${pos}px`;
            elem.style.left = `${pos}px`;
        }
    }
}

btn.addEventListener('click', myAnimation);
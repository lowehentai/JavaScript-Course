// // const box = document.querySelector('.box');
// // timerId = setTimeout(moveButton, 2000);


// // box.addEventListener('click', () => {
// //     clearInterval(timerId);
// // });

// // let x = 0;

// // function moveButton() {
// //     setInterval(() => {
// //         x += 2;
// //         if (x <= 200) {
// //             box.style.cssText = `margin-left: ${x}px`;
// //         }
// //         console.log(x);
// //     }, 50);
// // }

// // let id = setTimeout(function log() {
// //     console.log('start');
// //     id = setTimeout(log, 5000);
// //     console.log('end');
// // }, 2000);


// // function myAnimation() {
// //     const elem = document.querySelector('.box');
// //     let pos = 0,
// //         back = false;

// //     function frame() {
// //         if (false) {
// //             clearInterval();
// //         } else {
// //             if (pos <= 300 && !back) {
// //                 pos += 2;
// //             } else if (pos == 0) {
// //                 back = false;
// //             } else if (back) {
// //                 pos -= 2;
// //             } else {
// //                 back = true;
// //             }
// //             elem.style.top = `${pos}px`;
// //             elem.style.left = `${pos}px`;
// //         }
// //     }
// //     setInterval(frame, 200);
// // }

// const btn = document.querySelector('.btn'),
//     elem = document.querySelector('.box');
// let pos = 0;


// function myAnimation() {
//     pos++;
//     elem.style.top = `${pos}px`;
//     elem.style.left = `${pos}px`;

//     if (pos <= 300) {
//         requestAnimationFrame(myAnimation);
//     }
// }

// btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

// // let id = requestAnimationFrame(myAnimation);
// // cancelAnimationFrame(id);

const btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

// let start = Date.now(); // запомнить время начала

// let timer = setInterval(function () {
//     // сколько времени прошло с начала анимации?
//     let timePassed = Date.now() - start;
//         console.log(timePassed);
//     if (timePassed >= 2000) {
//         clearInterval(timer); // закончить анимацию через 2 секунды
//         return;
//     }

//     // отрисовать анимацию на момент timePassed, прошедший с начала анимации
//     draw(timePassed);

// }, 20);

// // в то время как timePassed идёт от 0 до 2000
// // left изменяет значение от 0px до 400px
// function draw(timePassed) {
//     elem.style.left = timePassed / 5 + 'px';
// }

function draw(progress) {
    elem.style.left = progress * 90 + '%';
}


function linear(timeFraction) {
    return timeFraction;
}

function quad(timeFraction) {
    return Math.pow(timeFraction, 10);
}

function circ(timeFraction) {
    return 1 - Math.sin(Math.acos(timeFraction));
}

function back(timeFraction, x = 1) {
    return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}

function elastic(timeFraction, x = 1.5) {
    return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
}

btn.addEventListener('click', () => {
    animate({
        duration: 5000,
        timing: elastic,
        draw: draw
    });
});

function animate({
    timing,
    draw,
    duration
}) {
    let start = performance.now();
    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) {
            timeFraction = 1;
        }
        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);
        draw(progress); // отрисовать её
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
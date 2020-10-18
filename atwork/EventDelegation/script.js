const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('#first');


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.blue')) {
        e.target.classList.toggle('red');
    }
});

// wrapper.addEventListener('click', (e) => {
//     if (e.target && e.target.tagName == 'BUTTON') {
//         e.target.classList.toggle('blue');
//     }
// });
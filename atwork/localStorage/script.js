'use strict';

const checkbox = document.querySelector('#checkbox'),
    form = document.querySelector('form'),
    change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('isBG') === 'true') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('isBG') === 'true') {
        localStorage.setItem('isBG', false);
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('isBG', true);
        form.style.backgroundColor = 'red';
    }
});

const obj = [{
            "img": "img/tabs/vegy.jpg",
            "altimg": "vegy",
            "title": "Меню 'Фитнес'",
            "descr": "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
            "price": 9
        },
        {
            "img": "img/tabs/post.jpg",
            "altimg": "post",
            "title": "Меню 'Постное'",
            "descr": "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
            "price": 14
        },
        {
            "img": "img/tabs/elite.jpg",
            "altimg": "elite",
            "title": "Меню 'Премиум'",
            "descr": "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
            "price": 21
        }
    ],
    jsonObj = JSON.stringify(obj);

localStorage.setItem('object', jsonObj);

console.log(JSON.parse(localStorage.getItem('object')));
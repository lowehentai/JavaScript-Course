'use strict';

// console.log('Запрос Данных...');

// const req = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         console.log('Подгатовка Данных...');

//         const product = {
//             name: 'TV',
//             price: 2000,
//         };

//         reslove(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             reslove(product);
//         }, 2000);
//     }).then(data => {
//         console.log(data);
//     });
// });



// console.log('Запрос Данных...');

// const req = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         console.log('Подгатовка Данных...');

//         const product = {
//             name: 'TV',
//             price: 2000,
//         };

//         reslove(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((reslove, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             reslove(product); //reject();
//         }, 2000);
//     }).then(data => {
//         data.modify = false;
//         return data;
//     }).then(data => {
//         console.log(data);
//         return data;
//     }).then(data => {
//         if(data.modify == true) {
//             data.hentai = true;
//         } else {
//             data.hentai = false;
//         }
//         return data;
//     }).then(data => { // Бутед выполнен в положительном случае
//         console.log(data);
//     }).catch(() => { // Будет выполнен в отрицательном случае
//         console.error('Что-то пошло не так...');
//     }).finally(() => { // В любом случае будет выполнен
//         console.log('Finally');
//     });
// });


const test = time => {
    return new Promise(reslove => {
        setTimeout(() => reslove(time), time);
    });
};

// test(1000).then((time) => console.log(`Выполнен за: ${time} ms`));
// test(2000).then((time) => console.log(`Выполнен за: ${time} ms`));

Promise.all([test(1000), test(2000)]).then(() => { // Выполнит тогда когда все будут загружены 
    console.log('All');
});

Promise.race([test(1000), test(2000)]).then(() => { // Выполнит тогда когда хотя бы один будет загружен
    console.log('Race');
});
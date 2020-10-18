'use stirct';

//filter

// const names = ['IvAn', 'AnN', 'DeNis', 'VolDemart', 'HeNtai', 'EcChi', 'AleXandEr', 2, 6];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);



//map

// const normalNames = names.map(itme => itme.toLocaleLowerCase());

// console.log(normalNames);



//every / some

// console.log(names.some(item => typeof(item) === 'number')); // Если хоть один в том формате
// console.log(names.every(item => typeof(item) === 'number')); // Если все типы данных в одном и том же формате



//reduce

// const arr = [1, 5, 2, 6, 8, 6, 7, 12, 3, 2, 7, 5];

// const res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res);



//practic

const obj = {
    alex: 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(newArray);
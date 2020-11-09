'use stric';

function* say () {
    yield 's';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = say();

console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);
console.log(str.next().value);

// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// for ( let k of count(8)) {
//     console.log(k);
// }
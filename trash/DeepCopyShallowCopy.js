let a = {
    name: 'Hentai',
    protocol: 'https',
    CountHentai: 12,
    isOnline: true,
    HentaiVideo: ['Anamme!', 'Okasaka', 'TokioWaruides', 'ChibaLowe'],
    myObject: {
        Lesson: {
            nameIsTrue: 'Hello',
            age: 18
        }
    }
}

let b = {...a};
b.HentaiVideo = {...a.HentaiVideo};
b.myObject = {...a.myObject};
b.myObject.Lesson = {...a.myObject.Lesson};
b.myObject.Lesson.nameIsTrue = "Hi!";
b.HentaiVideo[1] = 'Hellow';

console.log(a.HentaiVideo[1]);
console.log(b.HentaiVideo[1]);
console.log(a.myObject.Lesson.nameIsTrue);
console.log(b.myObject.Lesson.nameIsTrue);



console.log(a === b);



// b.name = 'Love';
// b.protocol = 'http';
// b.myObject.Lesson.age = 20;

// console.log(a.name + ' ' + a.protocol + ' ' + a.myObject.Lesson.age);

// console.log(b.name + ' ' + b.protocol + ' ' + b.myObject.Lesson.age);
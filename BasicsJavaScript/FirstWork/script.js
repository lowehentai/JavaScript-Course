'use strict';

let numberOfFilms;

const personalMovieDB = {
    count: 0, //
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
        return numberOfFilms;
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= 2; i++) {
            const a = prompt(`Вопрос: ${i}. Один из последних просмотренных фильмов?`, ''),
                b = prompt('На сколько оцените его?', '');

            if ((a != '' && a !== null && a.length <= 50) && (b != '' && b !== null && b.length <= 5)) {
                personalMovieDB.movies[a] = b;
            } else {
                alert('Error !');
                i--;
            }
        }
    },
    personalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count < 20) {
            alert('easy');
        } else if (personalMovieDB.count >= 20 && personalMovieDB.count < 30) {
            alert('normal');
        } else if (personalMovieDB.count >= 30) {
            alert('hard');
        } else {
            alert('Error !!');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden.privat) {
            console.log(hidden.movies);
        } else {
            console.log('Your DataBase Private !');
        }
    },
    writeYourGenres: function () {
        // let answer;
        // for (let i = 1; i <= 3; i++) {
        //     answer = prompt(`Your Loved Genres. Format(,) Quest: ${i}`, '');
        //     if (answer != null && answer != '') {
        //         personalMovieDB.genres[i - 1] = answer;
        //     } else {
        //         i--;
        //     }
        // }
        // let counter = 0;
        // personalMovieDB.genres.forEach(element => {
        //     counter++;
        //     console.log(`Любимый Жанр ${counter}: ${element}`);
        // });

        let answer;
        for (let i = 1; i <= 1; i++) {
            answer = prompt(`Your Loved Genres. Format( , ) Quest: ${i}`, '');
            if (answer != null && answer != '') {
                personalMovieDB.genres = answer.split(', ');
                console.log(personalMovieDB);
            } else {
                i--;
            }
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};


// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.personalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB(personalMovieDB);

// // console.log(personalMovieDB);


const box = document.querySelectorAll('#box'),
    btns = document.querySelectorAll('button'),
    circles = document.querySelectorAll('.circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

console.log(btns);

let array = ['red', 'blue', 'gray', 'yellow', 'green'];
btns.forEach((item, i) => {
    item.style.cssText = `background-color: ${array[i]};`;
});

circles.forEach(item => {
    item.style.backgroundColor = 'black';
});

circles[1].style.backgroundColor = 'gray';
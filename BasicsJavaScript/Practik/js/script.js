/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
window.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            'Логан',
            'Лига справедливости',
            'Ла-ла лэнд',
            'Одержимость',
            'Скотт Пилигрим против...'
        ]
    };

    let promoAdv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        promoList = document.querySelector('.promo__interactive-list'),
        addBlock = document.querySelector('form.add'),
        myInput = addBlock.querySelector('.adding__input'),
        checkbox = addBlock.querySelector('[type="checkbox"]');


    addBlock.addEventListener('submit', (event) => {
        event.preventDefault();

        const newFilm = myInput.value,
            favorite = checkbox.checked;

        if (newFilm != null && newFilm) {

            if (newFilm.length >= 21) {
                movieDB.movies.push(newFilm.slice(0, 21) + '...');
                addFilmsList(movieDB.movies, promoList);
            } else {
                movieDB.movies.push(newFilm);
                addFilmsList(movieDB.movies, promoList);
            }
            if (favorite) {
                console.log('Добавляем любимый фильм...');
            }
            console.log(movieDB);
        }

        event.target.reset();
    });


    const removeAdv = (arr) => {
        arr.forEach(items => {
            items.remove();
        });
    };

    removeAdv(promoAdv);

    genre.textContent = "драма";
    poster.style.backgroundImage = `url('img/ibg.jpg')`;

    const sortArray = (arr) => {
        arr.sort();
    };

    function addFilmsList(films, parent) {
        parent.innerHTML = '';

        sortArray(movieDB.movies);

        films.forEach((item, i) => {
            parent.innerHTML +=
                `<li class="promo__interactive-item">
                    ${i + 1}: ${item}
                    <div class="delete"></div>
                </li>`;
            // console.log(item);
        });

        document.querySelectorAll('.delete').forEach((items, i) => {
            items.addEventListener('click', () => {
                items.parentElement.remove();
                movieDB.movies.splice(i, 1);

                addFilmsList(films, parent);
            });
        });
    }

    addFilmsList(movieDB.movies, promoList);












});
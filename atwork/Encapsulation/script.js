'use stric';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Hentai !';

    say() {
        console.log(`Name :  ${this.name} ${this.#surname} Age : ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(nav) {
        if (typeof nav === 'number' && nav > 0 && nav < 110) {
            this._age = nav;
        } else {
            console.log('Не допустимой значение !');
        }
    }

    get surname() {
        return this.#surname;
    }

    set surname(value) {
        this.#surname = value;
    }
}

const ivan = new User('ivan', 27);

console.log(ivan.age);

ivan.age = 99;

console.log(ivan.age);

console.log(ivan.surname);

ivan.surname = 'Hello !';

console.log(ivan.surname);

ivan.say();

// this code not standarted in 2020 !
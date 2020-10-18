function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const hentai = new User('Hentai', 'R34');

console.log(hentai.hello());

hentai.hello();
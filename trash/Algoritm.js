class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    render() {
        return (
            console.log('Hello World ! myName is: ' + this.name + ' age: ' + this.age)
        )
    }
}

let hello = new Man('david', 18).render();

let x = y = z = 12;
console.log(x, y, z);
// let jsClass = hello.render();
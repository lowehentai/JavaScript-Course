function myModule() {
    this.hello = function() {
        console.log('Hello !');
    };

    this.goodbye = function () {
        console.log('Good Bye !');
    };
}


module.exports = myModule;
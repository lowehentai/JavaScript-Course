const btns = document.querySelectorAll('button');


btns.forEach(items => {
    let x = true;

    items.addEventListener('click', function myFunction(event) {
        console.log(event.target);

        if (x) {
            event.target.style.cssText = 'background-color: red;';
            x = false;
        } else {
            event.target.style.cssText = 'background-color: green;';
            x = true;
        }
    });
});

const myHref = document.querySelector('a');

myHref.addEventListener('click', function(e){
    e.preventDefault();
    console.log(e.target);
});

// btns.forEach(items => {
//     items.addEventListener('click', myFunction, {once: true});
// });
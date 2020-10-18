// console.log(document.head);
// console.log(document.documentElement);

// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.querySelector('.first').lastElementChild);
// console.log(document.querySelector('.first').lastChild);

console.log(document.querySelector('#current').parentNode);
console.log(document.querySelector('#current').parentElement);


// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.querySelector('.second').childNodes) {
    
    if (node.nodeName == '#text' || node.nodeName == '#comment') {
        continue;
    }

    console.log(node);
}
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: 'Alexander'
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(json => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));
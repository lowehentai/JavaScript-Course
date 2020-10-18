const hentai = {
    name: 'hentai',
    age: 18,
    loved: 'ecchi'
};

let ecchi = JSON.parse(JSON.stringify(hentai)); // Deep Copy ( obj => JSON 'stringify' | JSON => obj 'parse' )


console.log(hentai.name);

ecchi.name = 'ecchi';

console.log(ecchi.name);
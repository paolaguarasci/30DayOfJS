const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const main = document.querySelector('div.main');

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello, I m a %s string', '💩' );
const typeOfString = '💩';
console.log(`Hello, I m a ${typeOfString} string`);

// Styled
console.log('%c I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue;');

// warning!
console.warn('OH NOOOO!!!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
// vedi il testo solo se l'asserzione è falsa
console.assert(1 === 1, 'That is wrong!'); 
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'You did not select the right element!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
        console.log(`This is a ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});


// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');


// timing
// la differenza di tempi è dovuta al funzionamento asincrono di 'then' 
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data'); // ~100 ms
        
        let avatar = data.avatar_url;
        let img = document.createElement('img');
        img.setAttribute('src', avatar);
        main.appendChild(img);
        
        let newP = document.createElement('p');
        let newContent = document.createTextNode(data.bio);
        newP.appendChild(newContent);
        main.appendChild(newP);


        console.log(data);
    });
// console.timeEnd('fetching data'); // ~ 0.5 ms



// table
console.table(dogs);



















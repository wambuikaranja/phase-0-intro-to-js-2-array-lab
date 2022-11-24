// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (name) {
    cats.push(name);
}
destructivelyAppendCat('Pinky');

function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    };
beforeEach()

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat('Jaha');

function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    };
beforeEach()

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
destructivelyRemoveLastCat();

function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    };
beforeEach()

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

destructivelyRemoveFirstCat();

function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    };
beforeEach()
const newCats = [...cats];
function appendCat () {
    newCats.splice(-1)
    
}
appendCat("Broom");

function beforeEach () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
    };
beforeEach()
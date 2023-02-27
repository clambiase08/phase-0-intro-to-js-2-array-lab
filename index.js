// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);    
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    appendCat = [...cats, name]
    return appendCat;
}

function prependCat(name) {
    prependCat = [name, ...cats]
    return prependCat;
}

function removeLastCat() {
    removeLastCat = [...cats]
    return removeLastCat.slice(0, -1);
}

function removeFirstCat() {
    removeFirstCat = cats.slice()
    return removeFirstCat.slice(1);
}
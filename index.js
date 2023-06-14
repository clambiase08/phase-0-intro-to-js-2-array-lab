// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat() {
  cats.push("Ralph");
}
  
function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
  cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
  cats.shift(0);
}

function appendCat() {
  appendCat = [...cats, "Broom"];
  return appendCat;
}

function prependCat() {
  prependCat = ["Arnold", ...cats];
  return prependCat;
}

function removeLastCat() {
  removeLastCat = cats.slice(0, 2);
  return removeLastCat;
}

function removeFirstCat() {
  removeFirstCat = cats.slice(1,3);
  return removeFirstCat;
}
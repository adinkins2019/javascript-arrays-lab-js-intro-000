var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  var newArr = kittens;
  newArr.push(name)
  return newArr
}

function destructivelyPrependKitten(name){
  var newArr = kittens;
  newArr.unshift(name)
  return newArr
}

function destructivelyRemoveLastKitten(){
  var newArr = kittens;
  newArr.pop()
  return newArr
}

function destructivelyRemoveFirstKitten(){
  var newArr = kittens;
  newArr.shift();
  return newArr;
}

function appendKitten(name){
  var newArr = [];
  var newKitten = name.split()
  newArr = kittens.concat(newKitten);
  return newArr;
}

function prependKitten(name){
  var newKitten = name.split()
  newKitten.concat(kittens);
  return newKitten;
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length -1)
}

function removeFirstKitten(){
  return kittens.slice(1)
}

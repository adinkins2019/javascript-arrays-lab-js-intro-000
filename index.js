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
  newArr = kittens.map(item => newArr.push(item));
  newArr.concat(newKitten);
  return newArr;
}

function prependKitten(name){
  var newArr = []
  var newKitten = name.split()
  newArr = kittens.map(item => newArr.push(item));
  newKitten.concat(newArr);
  return newKitten;
}

function removeLastKitten(){

}

function removeFirstKitten(){

}

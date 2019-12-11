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
  newArr.shift()
  return newArr
}

function appendKitten(name){

}

function prependKitten(name){

}

function removeLastKitten(){

}

function removeFirstKitten(){

}

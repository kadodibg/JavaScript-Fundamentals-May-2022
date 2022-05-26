let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let myNewFish =["angel", "clown", "drum", "sturgeon"]
let removed = myFish.splice(3, 1, 'Golden');
let add = myNewFish.push('Shark');
let cut = myNewFish.shift();

console.log(myFish);
console.log(myNewFish);
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]
// add is ["Shark"]
// add at i[0] shift

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]


//-------

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
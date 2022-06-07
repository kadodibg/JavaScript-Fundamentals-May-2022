// // function solve(){

// // }
// //solve();

// let myArray = ['one', 'two', 'three', 'four', 'five']
// let popped = myArray.pop();

// console.log(myArray);
// console.log(popped)

// let myArrays = ["Peter", "George", 'Mary'];
// myArrays.includes('George');
// myArrays.includes('John');

let arr = [5, 3, 8, -2, 11, -23];
console.log(myIncludes(arr, 3));
console.log(myIncludes(arr, 4));
console.log(myIncludes(arr, -23));

console.log(myIndexOf(arr, 3));
console.log(myIndexOf(arr, 4));
console.log(myIndexOf(arr, -23));

function myIncludes(arr, value) {
    for (let element of arr) {
        if (element == value) {
            return true;
        }
    }
}

function myIndexOf(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            return i;
        }
    }
    return -1;
}

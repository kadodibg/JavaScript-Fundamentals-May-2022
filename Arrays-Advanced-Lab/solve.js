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

// let arr = [-23, 5, 3, 8, -2, 11,];
// arr.unshift(arr.pop());
// console.log(arr[4]);
let input = [5, 3, 8, -2, 11, -23];
let r1 = mySlice(input, -4, -2);
let r2 = input.slice(-4, -2);
console.log(r1, r2)

function mySlice(arr, start, end){
    let result = [];
   
    if(end == undefined){
        end = arr.length
    }

    if(start == undefined){
        start = arr.length;
    }
   
   
    if(start < 0 ){
        start += arr.length

    }
    if(end < 0 ){
        start += arr.length

    }

    for(let i = start; i < (end && i < arr.length) ; i++){
        result.push(arr[i]);
    }
    return result;
}



// console.log(myIncludes(arr, 3));
// console.log(myIncludes(arr, 4));
// console.log(myIncludes(arr, -23));

// console.log(myIndexOf(arr, 3));
// console.log(myIndexOf(arr, 4));
// console.log(myIndexOf(arr, -23));

// function myIncludes(arr, value) {
//     for (let element of arr) {
//         if (element == value) {
//             return true;
//         }
//     }
// }

// function myIndexOf(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == value) {
//             return i;
//         }
//     }
//     return -1;
// }

let numsAsString = ['5', '3', '14', '-2', '8'];
let nums = [5, 3, 14, -2, 8];

// let r1 = numsAsString.map(x => Number(x));
// let r = mapToNumber(numsAsString);
    let r2 = mapToNumber(nums, increment);
console.log(/*r*/ '\n', r2);
// function mapToNumber(arr) {
//     let result = [];
//     for (let element of arr) {
//         result.push(increment(element));
//     }
//     return result;
// }

function mapToNumber(arr, func) {
    let result = [];
    for (let element of arr) {
        result.push(func(element));
    }
    return result;
}

function increment(x){
    return x + 1;
}

let arr = [1, 2, 3];
arr.splice(0);
arr.push(4, 5, 6);
arr.pop(1);
arr.shift(8)
arr.unshift(2, 3, 4)
arr.length = 0;
console.log(arr);